# 1. Create mount point for your data partition
sudo mkdir -p /mnt/ldata

# 2. Edit /etc/fstab to mount your partition automatically
sudo gnome-text-editor /etc/fstab
# Add the line (replace UUID with your partition UUID exactly):
# UUID=f1edf0a1-84e3-4b2d-8db9-4149659bbdb0  /mnt/ldata  ext4  defaults  0  2

# 3. Reload systemd and mount all filesystems from fstab
sudo systemctl daemon-reload
sudo mount -a

# 4. Set correct permissions and create game directories
sudo chmod 755 /mnt/ldata
sudo mkdir -p /mnt/ldata/games/steam

# 5. Create steam user if not already created
sudo adduser steam

# 6. Change ownership of game folder to steam user
sudo chown -R steam:steam /mnt/ldata/games/steam/

# 7. Switch to steam user
su - steam

# run the script to install steam, proton, flatseal for local user(steam)

# 9. Run Flatseal to give Steam access to the game directory:
flatpak run com.github.tchx84.Flatseal

# 10. In Flatseal:
#    - Select 'com.valvesoftware.Steam'
#    - Under Filesystem, add: /mnt/ldata/games/steam
#    - Make sure it’s read-write
#    - Save and exit

# 11. Launch Steam:
flatpak run com.valvesoftware.Steam

# 12. To enable GameMode in a Steam game, use this in launch options:"
#    - gamemoderun %command%