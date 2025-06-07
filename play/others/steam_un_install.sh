#!/bin/bash

set -e

echo "⚙️ Starting cleanup of Flatpak apps..."

# Uninstall Steam
if flatpak list --user | grep -q com.valvesoftware.Steam; then
    echo "🧹 Uninstalling Steam..."
    flatpak uninstall --user -y com.valvesoftware.Steam
else
    echo "✅ Steam is already uninstalled."
fi

# Uninstall Flatseal
if flatpak list --user | grep -q com.github.tchx84.Flatseal; then
    echo "🧹 Uninstalling Flatseal..."
    flatpak uninstall --user -y com.github.tchx84.Flatseal
else
    echo "✅ Flatseal is already uninstalled."
fi

# Uninstall ProtonUp-Qt
if flatpak list --user | grep -q net.davidotek.pupgui2; then
    echo "🧹 Uninstalling ProtonUp-Qt..."
    flatpak uninstall --user -y net.davidotek.pupgui2
else
    echo "✅ ProtonUp-Qt is already uninstalled."
fi

# Remove Flathub remote (optional)
if flatpak remote-list --user | grep -q flathub; then
    echo "🗑️ Removing Flathub remote (user)..."
    flatpak remote-delete --user flathub
else
    echo "✅ Flathub user remote already removed."
fi

echo ""
echo "🧼 Cleanup complete."
