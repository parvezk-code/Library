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

# 10. Open Flatseal and add directories to Steam App:
#    - Under Filesystem, add: 
#           /mnt/ldata/games/steam:rw
#           ~/.local/share:rw
#           ~/.cache:rw
#           ~/.config:rw
#           ~/.steam:rw
#           ~/.var/app:rw

#   - give direct access to gpu
#           enable GPU: --device=dri


#    - Under Variables, add:
#           RADV_PERFTEST=aco,rt		                # Enables ACO shader compiler (better FPS).
#           VKD3D_CONFIG=no_upload_hvv
#           AMD_VULKAN_ICD=RADV		                    #Ensures RADV driver is used (not llvmpipe).
#           GAMEMODERUN=1
#           MANGOHUD=1
#           MANGOHUD_CONFIG=fps_limit=60,position=top-left,no_display=0	#Caps FPS to avoid thermal throttling.
#           PROTON_USE_WINED3D=0
#           DXVK_ASYNC=1		                        #Reduces shader compilation stutter.
#           DISABLE_LAYER_AMD_SWITCHABLE_GRAPHICS_1=1	# Prevents GPU switching issues.

#not done
#           VK_INSTANCE_LAYERS=gamescope_wsi
#           WINE_FULLSCREEN_FSR=1		                #enables AMD FSR upscaling at 1080p
#           PROTON_NO_FSYNC=1		                    # if frame pacing is bad
#           PROTON_NO_ESYNC=1
#           ENABLE_VK_LAYER_gamescope=1
#           VK_ICD_FILENAMES=/usr/share/vulkan/icd.d/radeon_icd.x86_64.json  #Explicitly points to RADV.

# Enable RADV Vulkan driver (verify)
    vulkaninfo | grep "GPU id"

# 11. Launch Steam:
    flatpak run com.valvesoftware.Steam

# use Proton-GE for steam  
#   settings --> Properties --> Compatibility --> check "Force Proton" and select Proton GE.

# use Proton-GE for each steam game
#    Properties --> Compatibility --> check "Force Proton" and select Proton GE.

# 12. To enable GameMode in a Steam game, use this in launch options:"
#    - gamemoderun %command%

# 13. Disable Compositor (If using GNOME/KDE)
#	    Press Alt + F2, type r (GNOME) or disable Desktop Effects (KDE).
#       switch to Xfce or LXQt before gaming

# Shader Pre-Caching enabled.
#		Steam Settings → Shader Pre-Caching → Enable

# GPU in Performance Mode (no power throttling).
echo "performance" | sudo tee /sys/class/drm/card0/device/power_dpm_force_performance_level

# Give Steam higher CPU priority:
sudo cpulimit -e steam -l 90 -b  # Limits CPU to 90% (prevents freezing)

# Check BIOS: enable UMA Buffer Size = 4GB (important for iGPU)

------------------------------------------------------------------------------------------

sudo apt install cpufrequtils
sudo cpufreq-set -g performance


performance                     :   CPU runs at **max frequency all the time**
       
ondemand/powersave(default)     :   CPU scales up/down based on load 
                                    may introduce lag or stuttering

performance(Not ideal)          :   Systems sensitive to thermal load
                                    reduce battery life
