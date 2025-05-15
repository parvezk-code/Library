#!/bin/bash

set -e

# Check if Steam is installed via Flatpak
echo "Checking if Steam is installed via Flatpak..."
if flatpak list | grep -q com.valvesoftware.Steam; then
    echo "Removing Steam..."
    flatpak uninstall -y com.valvesoftware.Steam
else
    echo "Steam is not installed via Flatpak."
fi

# Check if Flathub repository exists
echo "Checking if Flathub repository is added..."
if flatpak remote-list | grep -q flathub; then
    echo "Removing Flathub repository..."
    sudo flatpak remote-remove flathub
else
    echo "Flathub repository not found."
fi

# Check if Flatpak was installed and remove it (only if it's not being used for other apps)
echo "Checking if Flatpak is installed..."
if command -v flatpak &> /dev/null; then
    echo "Flatpak is installed. Checking if it's only used for Steam..."
    if ! flatpak list | grep -q -v com.valvesoftware.Steam; then
        echo "No other apps using Flatpak. Removing Flatpak..."
        sudo apt remove --purge -y flatpak
        sudo apt autoremove -y
    else
        echo "Other Flatpak apps are installed. Flatpak will not be removed."
    fi
else
    echo "Flatpak is not installed."
fi

echo "Steam and associated components have been removed."
