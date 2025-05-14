#!/bin/bash

set -e

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
sudo apt install -y gamemode

# MangoHUD
echo "📊 Installing MangoHUD..."
sudo apt install -y mangohud

# Vulkan (AMD/Intel/NVIDIA - install both 64 and 32-bit)
echo "🧱 Installing Vulkan drivers..."
sudo apt install -y mesa-vulkan-drivers mesa-vulkan-drivers:i386

# Enable Flatpak and Heroic Launcher
echo "📦 Setting up Flatpak and Heroic Launcher..."
sudo apt install -y flatpak gnome-software-plugin-flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install -y flathub com.heroicgameslauncher.hgl

# Optional: Create Steam Proton launch overrides
echo "🛠️ Adding environment variables for MangoHUD and GameMode..."
echo "export MANGOHUD=1" >> ~/.profile
echo "export GAMEMODERUN=1" >> ~/.profile

echo "✅ Done! Please reboot or log out and back in to apply environment changes."

echo "🎮 Ubuntu is now ready for gaming!"
