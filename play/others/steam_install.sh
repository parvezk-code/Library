#!/bin/bash

set -e

# Check if Flatpak is installed
echo "Checking if Flatpak is installed..."
if ! command -v flatpak &> /dev/null; then
    echo "Flatpak not found, installing..."
    sudo apt update
    sudo apt install -y flatpak
else
    echo "Flatpak is already installed."
fi

# Check if Flathub repository is added
echo "Checking if Flathub repository is added..."
if ! flatpak remote-list | grep -q flathub; then
    echo "Adding Flathub repository..."
    sudo flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
else
    echo "Flathub repository already exists."
fi

# Install Steam via Flatpak
echo "Checking if Steam is installed..."
if ! flatpak list | grep -q com.valvesoftware.Steam; then
    echo "Installing Steam from Flathub..."
    flatpak install -y flathub com.valvesoftware.Steam
else
    echo "Steam is already installed via Flatpak."
fi

# Launch Steam
echo "Launching Steam..."
flatpak run com.valvesoftware.Steam &

# Final message
echo "Steam installation complete and starting..."
echo "Note: Some systems may require a restart for full Flatpak integration."
