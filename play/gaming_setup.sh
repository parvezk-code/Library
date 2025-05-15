#!/bin/bash

set -euo pipefail

echo "🎮 Starting Ubuntu Gaming Setup..."

# === FUNCTIONS ===

install_apt_packages() {
  for pkg in "$@"; do
    if dpkg -s "$pkg" &>/dev/null; then
      echo "✅ $pkg already installed"
    else
      echo "📦 Installing $pkg..."
      sudo apt install -y "$pkg"
    fi
  done
}

install_flatpak_app() {
  local app_id="$1"
  local name="$2"
  if flatpak list | grep -q "$app_id"; then
    echo "✅ $name already installed"
  else
    echo "📦 Installing $name..."
    flatpak install -y flathub "$app_id"
  fi
}

apply_flatpak_override_if_needed() {
  local app_id="$1"
  shift
  local current_overrides
  current_overrides=$(flatpak info --show-permissions "$app_id" 2>/dev/null || echo "")
  if [[ "$current_overrides" == *"$1"* ]]; then
    echo "✅ Overrides for $app_id already applied"
  else
    echo "🛠️ Applying Flatpak overrides for $app_id..."
    flatpak override --user "$app_id" "$@"
  fi
}

# === SYSTEM UPDATE ===

echo "🔄 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# === MULTIARCH SUPPORT ===

if ! dpkg --print-foreign-architectures | grep -q i386; then
  echo "🔧 Enabling 32-bit (i386) architecture support..."
  sudo dpkg --add-architecture i386
  sudo apt update
else
  echo "✅ 32-bit architecture already enabled"
fi

# === APT PACKAGE INSTALLS ===

install_apt_packages \
  flatpak gnome-software-plugin-flatpak \
  gamemode libgamemode0 libgamemodeauto0 \
  mangohud \
  wine64 winetricks \
  mesa-vulkan-drivers mesa-vulkan-drivers:i386 \
  vulkan-tools

# === FLATHUB ===

if ! flatpak remote-list | grep -q flathub; then
  echo "🔗 Adding Flathub..."
  flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
else
  echo "✅ Flathub already added"
fi

# === FLATPAK INSTALLS ===

install_flatpak_app com.valvesoftware.Steam "Steam"
install_flatpak_app net.lutris.Lutris "Lutris"
install_flatpak_app com.heroicgameslauncher.hgl "Heroic Games Launcher"
install_flatpak_app net.davidotek.pupgui2 "ProtonUp-Qt"
install_flatpak_app com.github.tchx84.Flatseal "Flatseal"

# === ENVIRONMENT VARIABLES ===

echo "🛠️ Ensuring MangoHUD and GameMode variables in ~/.profile..."
PROFILE_UPDATED=false
grep -q "MANGOHUD=1" ~/.profile || { echo "export MANGOHUD=1" >> ~/.profile; PROFILE_UPDATED=true; }
grep -q "GAMEMODERUN=1" ~/.profile || { echo "export GAMEMODERUN=1" >> ~/.profile; PROFILE_UPDATED=true; }

$PROFILE_UPDATED && echo "🔁 Added variables to ~/.profile" || echo "✅ Environment variables already present"

# === FLATPAK OVERRIDES ===

echo "🚫 Skipping dangerous overrides for Steam (per Flathub policy)"
flatpak override --user --reset com.valvesoftware.Steam

# Safe override: Heroic
apply_flatpak_override_if_needed com.heroicgameslauncher.hgl \
  --filesystem=home \
  --filesystem=/run/udev:ro \
  --filesystem=/dev/input:ro \
  --filesystem=/mnt \
  --filesystem=/media \
  --device=all \
  --socket=wayland \
  --socket=x11 \
  --socket=pulseaudio \
  --env=DISPLAY=:0 \
  --env=VK_ICD_FILENAMES=/usr/share/vulkan/icd.d/nvidia_icd.json \
  --env=MANGOHUD=1 \
  --env=GAMEMODERUN=1

# Safe override: Lutris
apply_flatpak_override_if_needed net.lutris.Lutris \
  --filesystem=home \
  --filesystem=/run/udev:ro \
  --filesystem=/dev/input:ro \
  --filesystem=/mnt \
  --filesystem=/media \
  --device=all \
  --socket=wayland \
  --socket=x11 \
  --socket=pulseaudio \
  --env=DISPLAY=:0 \
  --env=VK_ICD_FILENAMES=/usr/share/vulkan/icd.d/nvidia_icd.json \
  --env=MANGOHUD=1 \
  --env=GAMEMODERUN=1

# === DONE ===

echo "✅ All done! Please reboot or log out/in to apply changes."
echo "🎮 Your Ubuntu 24.04 system is now gaming-ready!"
