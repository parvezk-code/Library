#!/bin/bash

set -euo pipefail

echo "🧹 Starting Ubuntu Gaming Uninstall and Cleanup..."

# Remove Flatpak apps
echo "🗑️ Removing Flatpak gaming applications..."
flatpak uninstall -y \
  com.valvesoftware.Steam \
  net.lutris.Lutris \
  com.heroicgameslauncher.hgl \
  net.davidotek.pupgui2 || true

# Remove Flathub repo
echo "🔗 Removing Flathub repository..."
flatpak remote-delete flathub || true

# Remove APT packages
echo "🗑️ Removing APT-installed gaming packages..."
sudo apt remove --purge -y \
  gamemode libgamemode0 libgamemodeauto0 \
  mangohud \
  wine64 winetricks \
  mesa-vulkan-drivers mesa-vulkan-drivers:i386 \
  vulkan-tools \
  flatpak gnome-software-plugin-flatpak || true

# Remove 32-bit architecture support (optional, only if not needed for other apps)
echo "🔧 Removing i386 architecture (optional)..."
sudo dpkg --remove-architecture i386 || true
sudo apt update

# Autoremove leftover dependencies
echo "🧹 Running autoremove..."
sudo apt autoremove --purge -y

# Clean APT cache
echo "🧹 Cleaning APT cache..."
sudo apt clean

# Remove environment variables from .profile
echo "🧽 Cleaning up .profile from MANGOHUD and GAMEMODERUN..."
sed -i '/export MANGOHUD=1/d' ~/.profile
sed -i '/export GAMEMODERUN=1/d' ~/.profile

echo "✅ Uninstallation and cleanup complete!"
echo "🔁 It is recommended to reboot your system now."
