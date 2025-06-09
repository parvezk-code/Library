#!/bin/bash

set -e

echo "🔍 Checking for Flatpak..."
if ! command -v flatpak &> /dev/null; then
    echo "❌ Flatpak not found. Please ask an admin to install Flatpak using:"
    echo "   sudo apt install flatpak"
    exit 1
else
    echo "✅ Flatpak is installed."
fi

echo "🌐 Ensuring Flathub is added for current user..."
if ! flatpak remote-list --user | grep -q flathub; then
    echo "🔗 Adding Flathub repository..."
    flatpak remote-add --user --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
else
    echo "✅ Flathub is already added for user."
fi

echo "🎮 Checking for Steam..."
if ! flatpak list --user | grep -q com.valvesoftware.Steam; then
    echo "📥 Installing Steam from Flathub..."
    flatpak install --user -y flathub com.valvesoftware.Steam
else
    echo "✅ Steam is already installed."
fi

echo "🛠️ Checking for Flatseal..."
if ! flatpak list --user | grep -q com.github.tchx84.Flatseal; then
    echo "📥 Installing Flatseal..."
    flatpak install --user -y flathub com.github.tchx84.Flatseal
else
    echo "✅ Flatseal is already installed."
fi

#  App image : https://github.com/DavidoTek/ProtonUp-Qt/releases/download/v2.12.0/ProtonUp-Qt-2.12.0-x86_64.AppImage

echo "🛠️ Checking for ProtonUp-Qt..."
if ! flatpak list --user | grep -q net.davidotek.pupgui2; then
    echo "📥 Installing ProtonUp-Qt..."
    flatpak install --user -y flathub net.davidotek.pupgui2
else
    echo "✅ ProtonUp-Qt is already installed."
fi

# if following fail install it globally
# flatpak install flathub org.freedesktop.Platform.VulkanLayer.MangoHud
echo "🛠️ Checking for MangoHud..."
if ! flatpak list --user | grep -q com.valvesoftware.Steam.Utility.MangoHud; then
    echo "📥 Installing MangoHud..."
    flatpak install --user -y flathub com.valvesoftware.Steam.Utility.MangoHud
else
    echo "✅ MangoHud is already installed."
fi

if ! flatpak list --user | grep -q org.freedesktop.Platform.VulkanLayer.gamescope; then
    echo "📥 Installing gamescope..."
    flatpak install --user -y flathub org.freedesktop.Platform.VulkanLayer.gamescope
else
    echo "✅ gamescope is already installed."
fi


echo ""
echo "🚀 Setup complete."
echo "👉 To launch Steam, run:"
echo "   flatpak run com.valvesoftware.Steam &"
echo ""
echo "👉 To launch flatseal:"
echo "   flatpak run com.github.tchx84.Flatseal"
echo ""
echo "👉 To launch ProtonUp-Qt and install Proton GE:"
echo "   flatpak run net.davidotek.pupgui2"
