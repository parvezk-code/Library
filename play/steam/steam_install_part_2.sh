#!/bin/bash

set -e

echo "🎮 Starting installation of gaming performance tools..."

# 1. Install GameMode and its libraries
echo "⚡ Installing GameMode..."
sudo apt install -y gamemode libgamemode0 libgamemodeauto0

#    monitor performance; can tune options like vsync, frame limiting.
# 2. Install MangoHUD for performance overlay
echo "📊 Do not Install MangoHUD... installed by flatpak"
# sudo apt install -y mangohud

# 3. Install Vulkan drivers for 64-bit and 32-bit (for Proton/Wine)
echo "🧩 Installing Vulkan drivers..."
sudo apt install -y mesa-vulkan-drivers mesa-vulkan-drivers:i386


#    diagnostic tool, not performance improvement
# 4. Install Vulkan tools (e.g., vulkaninfo)
echo "🔍 installing Vulkan tools(diagnostic)..."
sudo apt install -y vulkan-tools


echo ""
echo "✅ All gaming tools installed successfully!"
echo ""
echo "👉 To enable GameMode in a Steam game, use this in launch options:"
echo "   gamemoderun %command%"
echo ""
echo "👉 To enable MangoHUD overlay and see FPS overlay, use this:"
echo "   mangohud %command%"
echo ""
echo "🎮 You're now ready to game with optimized settings!"
