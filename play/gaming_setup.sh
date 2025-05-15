#!/bin/bash

set -euo pipefail

echo "🎮 Starting Ubuntu Gaming Setup (Flatpak-based)..."

# Update system
echo "🔄 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install essential system-level packages
echo "📦 Installing system dependencies (Flatpak, GameMode, MangoHUD, Wine, Vulkan)..."
sudo apt install -y \
  flatpak gnome-software-plugin-flatpak \
  gamemode libgamemode0 libgamemodeauto0 \
  mangohud \
  wine64 winetricks \
  mesa-vulkan-drivers mesa-vulkan-drivers:i386 \
  vulkan-tools

# Add Flathub repository (if not already added)
echo "🔗 Adding Flathub repository..."
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Install gaming applications via Flatpak
echo "🎮 Installing Steam (Flatpak)..."
flatpak install -y flathub com.valvesoftware.Steam

echo "🕹️ Installing Lutris (Flatpak)..."
flatpak install -y flathub net.lutris.Lutris

echo "🛍️ Installing Heroic Games Launcher (Flatpak)..."
flatpak install -y flathub com.heroicgameslauncher.hgl

echo "⚙️ Installing ProtonUp-Qt (Flatpak)..."
flatpak install -y flathub net.davidotek.pupgui2

# Detect GPU and install proprietary drivers (NVIDIA only)
echo "🔍 Detecting GPU..."
GPU_VENDOR=$(lspci | grep -E "VGA|3D" | grep -oE "NVIDIA|AMD|Intel" || true)

if [[ "$GPU_VENDOR" == "NVIDIA" ]]; then
  echo "🟡 NVIDIA GPU detected. Installing proprietary drivers..."
  sudo ubuntu-drivers autoinstall
elif [[ "$GPU_VENDOR" == "AMD" || "$GPU_VENDOR" == "Intel" ]]; then
  echo "🟢 $GPU_VENDOR GPU detected. Mesa drivers already installed."
else
  echo "⚠️ GPU vendor not detected. Please install drivers manually if needed."
fi

# Add MangoHUD and GameMode variables only if not already present
echo "🛠️ Configuring MangoHUD and GameMode in ~/.profile..."
PROFILE_UPDATED=false
grep -q "MANGOHUD=1" ~/.profile || { echo "export MANGOHUD=1" >> ~/.profile; PROFILE_UPDATED=true; }
grep -q "GAMEMODERUN=1" ~/.profile || { echo "export GAMEMODERUN=1" >> ~/.profile; PROFILE_UPDATED=true; }

if $PROFILE_UPDATED; then
  echo "🔁 Environment variables added to ~/.profile"
else
  echo "✅ Environment variables already present in ~/.profile"
fi

# Update Flatpak apps
echo "🔄 Updating installed Flatpak apps..."
flatpak update -y

echo "✅ All done!"
echo "🔁 Please reboot or log out and back in to apply changes."
echo "🎮 Your Ubuntu 24.04 system is now fully gaming-ready!"
