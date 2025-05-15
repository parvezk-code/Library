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

# Install Steam via Flatpak
echo "🎮 Installing Steam (Flatpak)..."
flatpak install -y flathub com.valvesoftware.Steam

# Install Lutris via Flatpak
echo "🕹️ Installing Lutris (Flatpak)..."
flatpak install -y flathub net.lutris.Lutris

# Install Heroic Games Launcher via Flatpak
echo "🛍️ Installing Heroic Games Launcher (Flatpak)..."
flatpak install -y flathub com.heroicgameslauncher.hgl

# Optional: ProtonUp-Qt for managing custom Proton builds
echo "⚙️ Installing ProtonUp-Qt (optional)..."
flatpak install -y flathub net.davidotek.pupgui2

# Install Flatseal to manage Flatpak permissions (e.g. Steam input device access)
echo "🛡️ Installing Flatseal (Flatpak permission manager)..."
flatpak install -y flathub com.github.tchx84.Flatseal

# Set environment variables for MangoHUD and GameMode if not already set
echo "🛠️ Enabling MangoHUD and GameMode in .profile..."
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

echo ""
echo "✅ All done! Please reboot or log out and back in to apply changes."
echo "🎮 Your Ubuntu 24.04 system is now fully ready for gaming!"
echo "🛡️ You can now launch Flatseal to manage Steam's Flatpak permissions (e.g. input devices)."
echo "👉 Run: flatpak run com.github.tchx84.Flatseal"
