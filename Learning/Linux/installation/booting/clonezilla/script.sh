#!/bin/bash
# ==============================================
# Add Clonezilla Live to GRUB Boot Menu (No USB)
# ==============================================

: <<'COMMENT'
    
    for chatgpt/deepseek

    Write a script to:
    - Download the Clonezilla ISO
    - Extract it to /boot/iso/clonezilla
    - Add Clonezilla entry to the GRUB boot menu on an Ubuntu system (no USB required)
    - Deletes and recreates GRUB entry in a new custom file (/etc/grub.d/41_clonezilla) 
    - instead of modifying /etc/grub.d/40_custom.

    Requirements:
    - Do not hardcode directory paths; define variables at the top of the script.
    - Create a variable for the ISO file location
    - download the ISO only if it does not already exist.
    - Make the script idempotent (safe to run multiple times). 
    - For each step, check if it is already done and skip it if so.
    - Avoid unnecessary complexity and use clean, beginner-friendly syntax.

COMMENT

# ====== CONFIG VARIABLES ======
ISO_NAME="clonezilla-live-latest-amd64.iso"
ISO_URL="https://clonezilla.org/downloads/stable/$ISO_NAME"
ISO_FILE="$HOME/$ISO_NAME"
MOUNT_DIR="/mnt/clonezilla_temp"
EXTRACT_DIR="/boot/iso/clonezilla"
GRUB_SCRIPT="/etc/grub.d/41_clonezilla"
GRUB_ENTRY_NAME="Clonezilla Live"
ISO_SQUASHFS_PATH="$EXTRACT_DIR/live/filesystem.squashfs"

# ====== DOWNLOAD ISO ======
if [ ! -f "$ISO_FILE" ]; then
    echo "⬇️ Downloading Clonezilla ISO to $ISO_FILE..."
    wget "$ISO_URL" -O "$ISO_FILE"
else
    echo "✅ ISO already exists at $ISO_FILE. Skipping download."
fi

# ====== MOUNT AND EXTRACT ======
if [ ! -d "$EXTRACT_DIR" ] || [ -z "$(ls -A "$EXTRACT_DIR" 2>/dev/null)" ]; then
    echo "📦 Extracting ISO contents to $EXTRACT_DIR..."
    sudo mkdir -p "$MOUNT_DIR"
    sudo mount -o loop "$ISO_FILE" "$MOUNT_DIR"
    sudo mkdir -p "$EXTRACT_DIR"
    sudo cp -r "$MOUNT_DIR"/* "$EXTRACT_DIR/"
    sudo umount "$MOUNT_DIR"
    sudo rmdir "$MOUNT_DIR"
else
    echo "✅ ISO already extracted to $EXTRACT_DIR. Skipping extraction."
fi

# ====== CREATE/REPLACE GRUB ENTRY ======
echo "🔧 Setting up GRUB script at $GRUB_SCRIPT..."

if [ -f "$GRUB_SCRIPT" ]; then
    echo "🗑️  Removing existing GRUB script..."
    sudo rm -f "$GRUB_SCRIPT"
fi

echo "📝 Creating new GRUB script..."
sudo tee "$GRUB_SCRIPT" > /dev/null << EOF
#!/bin/sh
set -e

menuentry "$GRUB_ENTRY_NAME" {
    set isofile="$ISO_SQUASHFS_PATH"
    search --set=root --file \$isofile
    loopback loop \$isofile
    linux (loop)/live/vmlinuz boot=live components union=overlay noswap nomodeset edd=on ocs_live_run="ocs-live-general" ocs_live_extra_param="" keyboard-layouts="us" locales="en_US.UTF-8" toram=filesystem.squashfs findiso=\$isofile
    initrd (loop)/live/initrd.img
}
EOF

# ====== MAKE SCRIPT EXECUTABLE ======
sudo chmod +x "$GRUB_SCRIPT"
echo "✅ GRUB script is executable."

# ====== UPDATE GRUB ======
echo "🔄 Updating GRUB configuration..."
sudo update-grub

echo "🎉 Done! You should now see '$GRUB_ENTRY_NAME' in your GRUB menu at boot."
