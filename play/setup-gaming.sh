#!/bin/bash

set -euo pipefail

echo "🎮 Starting Ubuntu Gaming Setup..."

# Update system
echo "🔄 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Steam
echo "🎮 Installing Steam..."
sudo apt install -y steam

# Wine & Winetricks
echo "🍷 Installing Wine and Winetricks..."
sudo apt install -y wine64 winetricks

# Lutris
echo "🕹️ Installing Lutris..."
sudo add-apt-repository -y ppa:lutris-team/lutris
sudo apt update
sudo apt install -y lutris

# GameMode
echo "🚀 Installing Feral GameMode..."
sudo apt install -y gamemode libgamemode0 libgamemodeauto0

# MangoHUD
echo "📊 Installing MangoHUD..."
sudo apt install -y mangohud libvulkan1 libvulkan1:i386

# Vulkan Drivers
echo "🧱 Installing Vulkan drivers (generic)..."
sudo apt install -y mesa-vulkan-drivers mesa-vulkan-drivers:i386

# Detect GPU and suggest drivers
echo "🔍 Detecting GPU vendor..."
GPU_VENDOR=$(lspci | grep -E "VGA|3D" | grep -oE "NVIDIA|AMD|Intel" || true)

if [[ "$GPU_VENDOR" == "NVIDIA" ]]; then
  echo "🟡 NVIDIA GPU detected. Installing proprietary drivers..."
  sudo ubuntu-drivers autoinstall
elif [[ "$GPU_VENDOR" == "AMD" ]]; then
  echo "🟢 AMD GPU detected. Mesa drivers are already installed."
elif [[ "$GPU_VENDOR" == "Intel" ]]; then
  echo "🔵 Intel GPU detected. Mesa drivers are already installed."
else
  echo "⚠️ GPU vendor not detected. You may need to install drivers manually."
fi

# Flatpak + Heroic Launcher
echo "📦 Setting up Flatpak and Heroic Launcher..."
sudo apt install -y flatpak gnome-software-plugin-flatpak

if ! flatpak remote-list | grep -q flathub; then
  echo "🌐 Adding Flathub..."
  flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
fi

echo "🎮 Installing Heroic Games Launcher (Flatpak)..."
flatpak install -y flathub com.heroicgameslauncher.hgl

# Add GameMode and MangoHUD to ~/.profile only if not present
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

echo "✅ Done! Please reboot or log out and back in to apply environment changes."
echo "🎮 Ubuntu is now ready for gaming!"
