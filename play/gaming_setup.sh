#!/bin/bash

set -euo pipefail

echo "🎮 Starting Ubuntu Gaming Setup (Flatpak-based with multiarch fix)..."

# Update system
echo "🔄 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Enable 32-bit architecture support (for Wine/Vulkan/Proton)
echo "🔧 Enabling 32-bit (i386) architecture support..."
sudo dpkg --add-architecture i386
sudo apt update

# Install essential system packages
echo "📦 Installing dependencies..."
sudo apt install -y \
  flatpak gnome-software-plugin-flatpak \
  gamemode libgamemode0 libgamemodeauto0 \
  mangohud \
  wine64 winetricks \
  mesa-vulkan-drivers mesa-vulkan-drivers:i386 \
  vulkan-tools

# Enable Flathub
echo "🔗 Adding Flathub repository..."
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Install gaming platforms via Flatpak
echo "🎮 Installing Steam..."
flatpak install -y flathub com.valvesoftware.Steam

echo "🕹️ Installing Lutris..."
flatpak install -y flathub net.lutris.Lutris

echo "🛍️ Installing Heroic Games Launcher..."
flatpak install -y flathub com.heroicgameslauncher.hgl

echo "⚙️ Installing ProtonUp-Qt (for custom Proton builds)..."
flatpak install -y flathub net.davidotek.pupgui2

echo "🔒 Installing Flatseal (to manage Flatpak permissions)..."
flatpak install -y flathub com.github.tchx84.Flatseal

# Set environment variables for MangoHUD and GameMode
echo "🛠️ Configuring MangoHUD and GameMode in ~/.profile..."
PROFILE_UPDATED=false

grep -q "MANGOHUD=1" ~/.profile || {
  echo "export MANGOHUD=1" >> ~/.profile
  PROFILE_UPDATED=true
}
grep -q "GAMEMODERUN=1" ~/.profile || {
  echo "export GAMEMODERUN=1" >> ~/.profile
  PROFILE_UPDATED=true
}

if $PROFILE_UPDATED; then
  echo "🔁 Environment variables added to ~/.profile (MANGOHUD, GAMEMODERUN)"
else
  echo "✅ Environment variables already present in ~/.profile"
fi

# Apply essential Steam Flatpak overrides
echo "🛠️ Applying essential Flatpak overrides for Steam..."
flatpak override --user com.valvesoftware.Steam \
  --filesystem=home \
  --filesystem=/run/udev:ro \
  --filesystem=/dev/input:ro \
  --device=all \
  --socket=wayland \
  --socket=x11 \
  --socket=pulseaudio \
  --env=DISPLAY=$DISPLAY \
  --env=STEAM_FORCE_DESKTOPUI_SCALING=1 \
  --env=MANGOHUD=1 \
  --env=GAMEMODERUN=1

# Apply essential Lutris Flatpak overrides
echo "🛠️ Applying essential Flatpak overrides for Lutris..."
flatpak override --user net.lutris.Lutris \
  # Home directory access
  --filesystem=home \
  # Critical for controllers
  --filesystem=/run/udev:ro \
  # Gamepad/keyboard access
  --filesystem=/dev/input:ro \
  # For external drives
  --filesystem=/mnt \
  # For removable media
  --filesystem=/media \
  # USB/GPU access
  --device=all \
  # Wayland support
  --socket=wayland \
  # X11 fallback
  --socket=x11 \
  # Sound
  --socket=pulseaudio \
  # GPU rendering (use current DISPLAY)
  --env=DISPLAY=$DISPLAY \
  # NVIDIA Vulkan (optional)
  --env="VK_ICD_FILENAMES=/usr/share/vulkan/icd.d/nvidia_icd.json" \
  # Enable MangoHUD
  --env=MANGOHUD=1 \
  # Enable GameMode
  --env=GAMEMODERUN=1

# Apply essential Heroic Games Launcher Flatpak overrides
echo "🛠️ Applying essential Flatpak overrides for Heroic Games Launcher..."
flatpak override --user com.heroicgameslauncher.hgl \
  --filesystem=home \
  --filesystem=/run/udev:ro \
  --filesystem=/dev/input:ro \
  --filesystem=/mnt \
  --filesystem=/media \
  --device=all \
  --socket=wayland \
  --socket=x11 \
  --socket=pulseaudio \
  --env=DISPLAY=$DISPLAY \
  --env="VK_ICD_FILENAMES=/usr/share/vulkan/icd.d/nvidia_icd.json" \
  --env=MANGOHUD=1 \
  --env=GAMEMODERUN=1

echo "✅ All done! Please reboot or log out and back in to apply changes."
echo "🎮 Your Ubuntu 24.04 system is now fully ready for gaming!"
