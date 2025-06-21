const config = {
    "metadata": {
      "title": "Optimized Ubuntu 24.04 Minimal Config for AMD Ryzen 9 + Radeon 680M",
      "purpose": "Transform Ubuntu 24.04 Minimal into a high-performance gaming environment for AMD Ryzen 9 6900HX and Radeon 680M systems",
      "targetSpecs": {
        "cpu": "AMD Ryzen 9 6900HX (8 cores/16 threads, Zen3+ architecture)",
        "gpu": "AMD Radeon 680M (RDNA2, 12 CUs, 4GB VRAM)",
        "memory": "16GB DDR5 (8x2 Dual Channel)",
        "storage": "500 GB NVMe SSD"
      },
      "version": "2.1",
      "lastUpdated": "2023-11-20"
    },
  
    "optimizations": {
      "kernelSystem": {
        "items": [
          {
            "id": "1.1",
            "name": "Install XanMod kernel",
            "description": "Provides low-latency, Zen-optimized performance for gaming and desktop responsiveness.",
            "params": [],
            "tags": ["kernel", "low-latency"],
            "affected": ["cpu"],
            "scriptTemplate": [
              "sudo add-apt-repository ppa:xanmod/kernel -y",
              "sudo apt update",
              "sudo apt install linux-xanmod-edge -y",
              "sudo update-initramfs -u",
              "sudo reboot"
            ],
            "verification": {
              "command": "uname -r | grep -i xanmod",
              "expectedOutput": "should contain 'xanmod'",
              "fallbackCheck": "grep -i xanmod /boot/config-$(uname -r)"
            }
          },
          {
            "id": "1.2",
            "name": "Set CPU scaling governor",
            "description": "Locks CPU to performance state for max frequency at all times.",
            "params": ["performance"],
            "tags": ["cpu", "power"],
            "affected": ["cpu"],
            "scriptTemplate": [
              "sudo apt install cpufrequtils -y",
              "echo 'GOVERNOR=\"performance\"' | sudo tee /etc/default/cpufrequtils",
              "sudo systemctl enable --now cpufrequtils"
            ],
            "verification": {
              "command": "cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor | uniq",
              "expectedOutput": "performance"
            }
          },
          {
            "id": "1.3",
            "name": "Configure AMD P-State driver",
            "description": "Enables better frequency control for Ryzen mobile CPUs using passive mode.",
            "params": ["amd_pstate=passive", "amd_pstate.shared_mem=1"],
            "tags": ["cpu", "scaling", "grub"],
            "affected": ["cpu"],
            "scriptTemplate": [
              "sudo apt install linux-firmware amd64-microcode -y",
              "sudo sed -i 's/GRUB_CMDLINE_LINUX_DEFAULT=\"/GRUB_CMDLINE_LINUX_DEFAULT=\"amd_pstate=passive amd_pstate.shared_mem=1 /' /etc/default/grub",
              "sudo update-grub",
              "sudo reboot"
            ],
            "verification": {
              "command": "cat /proc/cmdline | grep -o 'amd_pstate=passive'",
              "expectedOutput": "amd_pstate=passive"
            }
          },
          {
            "id": "1.4",
            "name": "Disable CPU mitigations (optional)",
            "description": "Turns off security mitigations for performance; use only on trusted systems.",
            "params": ["mitigations=off", "spectre_v2=off"],
            "tags": ["security", "cpu"],
            "affected": ["cpu"],
            "scriptTemplate": [
              "sudo sed -i 's/GRUB_CMDLINE_LINUX=\"/GRUB_CMDLINE_LINUX=\"mitigations=off spectre_v2=off /' /etc/default/grub",
              "sudo update-grub"
            ],
            "verification": {
              "command": "cat /proc/cmdline | grep -o 'mitigations=off'",
              "expectedOutput": "mitigations=off",
              "securityWarning": "This significantly reduces system security against speculative execution attacks"
            }
          }
        ]
      },
  
      "memoryStorage": {
        "items": [
          {
            "id": "2.1",
            "name": "Adjust swappiness",
            "description": "Minimizes reliance on swap space due to fast DDR5 memory.",
            "params": ["vm.swappiness=5"],
            "tags": ["memory", "swap"],
            "affected": ["memory"],
            "scriptTemplate": [
              "echo 'vm.swappiness=5' | sudo tee -a /etc/sysctl.d/99-gaming.conf",
              "sudo sysctl -w vm.swappiness=5"
            ],
            "verification": {
              "command": "cat /proc/sys/vm/swappiness",
              "expectedOutput": "5"
            }
          },
          {
            "id": "2.2",
            "name": "Configure dirty ratios",
            "description": "Improves writeback behavior for SSD/NVMe devices.",
            "params": ["vm.dirty_ratio=15", "vm.dirty_background_ratio=5", "vm.dirty_expire_centisecs=3000"],
            "tags": ["memory", "io"],
            "affected": ["memory", "storage"],
            "scriptTemplate": [
              "echo 'vm.dirty_ratio=15' | sudo tee -a /etc/sysctl.d/99-gaming.conf",
              "echo 'vm.dirty_background_ratio=5' | sudo tee -a /etc/sysctl.d/99-gaming.conf",
              "echo 'vm.dirty_expire_centisecs=3000' | sudo tee -a /etc/sysctl.d/99-gaming.conf",
              "sudo sysctl --system"
            ],
            "verification": {
              "commands": [
                {"cmd": "cat /proc/sys/vm/dirty_ratio", "expect": "15"},
                {"cmd": "cat /proc/sys/vm/dirty_background_ratio", "expect": "5"}
              ]
            }
          },
          {
            "id": "2.3",
            "name": "Enable transparent hugepages",
            "description": "Improves memory management for large game engines.",
            "params": ["madvise"],
            "tags": ["memory"],
            "affected": ["memory"],
            "scriptTemplate": [
              "echo madvise | sudo tee /sys/kernel/mm/transparent_hugepage/enabled",
              "echo 'vm.nr_overcommit_hugepages=8' | sudo tee -a /etc/sysctl.d/99-gaming.conf"
            ],
            "verification": {
              "command": "cat /sys/kernel/mm/transparent_hugepage/enabled",
              "expectedOutput": "should show [madvise]"
            }
          },
          {
            "id": "2.4",
            "name": "NVMe mount options",
            "description": "Optimizes filesystem behavior for SSD performance.",
            "params": ["noatime", "nodiratime", "discard", "commit=60"],
            "tags": ["storage", "filesystem"],
            "affected": ["storage"],
            "scriptTemplate": [
              "# Backup first: sudo cp /etc/fstab /etc/fstab.bak",
              "# Then edit: sudo nano /etc/fstab and add options to your NVMe partition"
            ],
            "verification": {
              "command": "findmnt -no OPTIONS / | grep -o noatime",
              "expectedOutput": "noatime",
              "note": "Verify all options appear in mount output"
            }
          },
          {
            "id": "2.5",
            "name": "Memory compaction tuning",
            "description": "Improves responsiveness during high memory pressure.",
            "params": ["vm.compaction_proactiveness=20"],
            "tags": ["memory"],
            "affected": ["memory"],
            "scriptTemplate": [
              "echo 'vm.compaction_proactiveness=20' | sudo tee -a /etc/sysctl.d/99-gaming.conf"
            ],
            "verification": {
              "command": "cat /proc/sys/vm/compaction_proactiveness",
              "expectedOutput": "20"
            }
          }
        ]
      },
  
      "gpuDisplay": {
        "items": [
          {
            "id": "3.1",
            "name": "AMDGPU parameters",
            "description": "Unlocks performance tuning options such as dynamic power levels and allocates larger GTT buffer for smoother gaming and rendering performance.",
            "params": ["amdgpu.ppfeaturemask=0xffffffff", "amdgpu.gttsize=3072"],
            "tags": ["gpu", "grub"],
            "affected": ["gpu"],
            "scriptTemplate": [
              "sudo sed -i 's/GRUB_CMDLINE_LINUX_DEFAULT=\"/GRUB_CMDLINE_LINUX_DEFAULT=\"amdgpu.ppfeaturemask=0xffffffff amdgpu.gttsize=3072 /' /etc/default/grub",
              "sudo update-grub",
              "sudo update-initramfs -u"
            ],
            "verification": {
              "commands": [
                {"cmd": "cat /proc/cmdline | grep -o 'amdgpu.ppfeaturemask=0xffffffff'", "expect": "amdgpu.ppfeaturemask=0xffffffff"},
                {"cmd": "dmesg | grep -i 'amdgpu: gtt size'", "expect": "should show 3072"}
              ]
            }
          },
          {
            "id": "3.2",
            "name": "VRAM allocation",
            "description": "Ensure BIOS is set to allocate 4GB VRAM for iGPU use.",
            "params": ["4GB"],
            "tags": ["gpu", "bios"],
            "affected": ["gpu"],
            "scriptTemplate": [
              "# Set VRAM allocation to 4GB in BIOS setup manually"
            ],
            "verification": {
              "command": "sudo lspci -v -s $(lspci | grep -i vga | cut -d' ' -f1) | grep -i prefetchable",
              "note": "Should show ~4GB memory range"
            }
          },
          {
            "id": "3.3",
            "name": "RDNA2 features",
            "description": "Enables FreeSync, VFR, and other RDNA2 features.",
            "params": [],
            "tags": ["gpu", "freesync"],
            "affected": ["gpu"],
            "scriptTemplate": [
              "# Enable FreeSync via display settings or monitor OSD"
            ],
            "verification": {
              "command": "glxinfo | grep -i 'Variable Refresh'",
              "expectedOutput": "should indicate support if enabled"
            }
          },
          {
            "id": "3.4",
            "name": "CoreCtrl configuration",
            "description": "User-space tool for fine-grained GPU tuning.",
            "params": [],
            "tags": ["gpu", "tuning"],
            "affected": ["gpu"],
            "scriptTemplate": [
              "flatpak install flathub io.github.corectrl.CoreCtrl -y",
              "flatpak override --user --filesystem=/sys/kernel/debug io.github.corectrl.CoreCtrl"
            ],
            "verification": {
              "command": "flatpak list | grep -i corectrl",
              "expectedOutput": "io.github.corectrl.CoreCtrl"
            }
          }
        ]
      },
  
      "gamingApps": {
        "items": [
          {
            "id": "4.1",
            "name": "GameMode setup",
            "description": "Applies temporary performance optimizations while gaming.",
            "params": [],
            "tags": ["gamemode", "auto-tuning"],
            "affected": ["cpu", "gpu"],
            "scriptTemplate": [
              "sudo apt install gamemode libgamemodeauto -y",
              "echo -e '[gpu]\namd_performance_level=high' | sudo tee -a /etc/gamemode.ini"
            ],
            "verification": {
              "commands": [
                {"cmd": "gamemoded --status", "expect": "should show running"},
                {"cmd": "cat /etc/gamemode.ini | grep 'amd_performance_level'", "expect": "amd_performance_level=high"}
              ]
            }
          },
          {
            "id": "4.2",
            "name": "FPS limiting",
            "description": "Reduces power usage and heat by limiting framerate.",
            "params": [],
            "tags": ["fps", "thermal"],
            "affected": ["gpu"],
            "scriptTemplate": [
              "sudo apt install libstrangle -y"
            ],
            "verification": {
              "command": "dpkg -l | grep libstrangle",
              "expectedOutput": "should show installed"
            }
          },
          {
            "id": "4.3",
            "name": "Process prioritization",
            "description": "Gives games and apps higher CPU and I/O scheduling priority.",
            "params": [],
            "tags": ["priority", "cpu"],
            "affected": ["cpu"],
            "scriptTemplate": [
              "sudo apt install ananicy-cpp -y",
              "sudo systemctl enable --now ananicy-cpp"
            ],
            "verification": {
              "commands": [
                {"cmd": "systemctl is-active ananicy-cpp", "expect": "active"},
                {"cmd": "journalctl -u ananicy-cpp | grep -i 'started'", "expect": "should show service started"}
              ]
            }
          },
          {
            "id": "4.4",
            "name": "Proton/Wine enhancements",
            "description": "Improves multithreaded performance in Wine/Proton games.",
            "params": ["WINEFSYNC=1", "WINEESYNC=1"],
            "tags": ["wine", "proton"],
            "affected": ["cpu", "memory"],
            "scriptTemplate": [
              "echo 'export WINEFSYNC=1' >> ~/.profile",
              "echo 'export WINEESYNC=1' >> ~/.profile"
            ],
            "verification": {
              "command": "grep -E 'WINEFSYNC|WINEESYNC' ~/.profile",
              "expectedOutput": "should show both variables set to 1"
            }
          }
        ]
      },
  
      "systemServices": {
        "items": [
          {
            "id": "5.1",
            "name": "Disable unused services",
            "description": "Reduces boot time and background CPU/memory usage.",
            "params": ["NetworkManager-wait-online", "bluetooth", "cups", "avahi"],
            "tags": ["services", "boot"],
            "affected": ["cpu", "memory"],
            "scriptTemplate": [
              "sudo systemctl disable NetworkManager-wait-online.service",
              "sudo systemctl disable bluetooth.service",
              "sudo systemctl disable cups.service",
              "sudo systemctl disable avahi-daemon.service"
            ],
            "verification": {
              "commands": [
                {"cmd": "systemctl is-enabled NetworkManager-wait-online.service", "expect": "disabled"},
                {"cmd": "systemctl is-enabled bluetooth.service", "expect": "disabled"}
              ]
            }
          },
          {
            "id": "5.2",
            "name": "Network stack tuning",
            "description": "Improves networking performance and responsiveness by increasing socket buffer sizes and enabling TCP Fast Open.",
            "params": [
              "net.core.rmem_max=4194304",
              "net.core.wmem_max=4194304",
              "net.ipv4.tcp_fastopen=3"
            ],
            "tags": ["network", "latency"],
            "affected": ["network"],
            "scriptTemplate": [
              "echo 'net.core.rmem_max=4194304' | sudo tee -a /etc/sysctl.d/99-gaming.conf",
              "echo 'net.core.wmem_max=4194304' | sudo tee -a /etc/sysctl.d/99-gaming.conf",
              "echo 'net.ipv4.tcp_fastopen=3' | sudo tee -a /etc/sysctl.d/99-gaming.conf",
              "sudo sysctl --system"
            ],
            "verification": {
              "commands": [
                {"cmd": "cat /proc/sys/net/core/rmem_max", "expect": "4194304"},
                {"cmd": "cat /proc/sys/net/ipv4/tcp_fastopen", "expect": "3"}
              ]
            }
          },
          {
            "id": "5.3",
            "name": "Audio latency optimization",
            "description": "Reduces audio latency and prevents power-saving induced audio glitches with AMD hardware. Also applies PipeWire-specific low-latency tuning.",
            "params": [
              "snd_hda_intel.power_save=0",
              "default.clock.quantum = 64"
            ],
            "tags": ["audio", "latency", "pipewire"],
            "affected": ["audio"],
            "scriptTemplate": [
              "echo 'options snd_hda_intel power_save=0' | sudo tee /etc/modprobe.d/audio_powersave.conf",
              "sudo mkdir -p /etc/pipewire/pipewire.conf.d",
              "echo 'context.properties = { default.clock.quantum = 64 }' | sudo tee /etc/pipewire/pipewire.conf.d/99-lowlatency.conf",
              "systemctl --user restart pipewire pipewire-pulse"
            ],
            "verification": {
              "commands": [
                {"cmd": "cat /sys/module/snd_hda_intel/parameters/power_save", "expect": "0"},
                {"cmd": "pw-metadata -n settings 0 clock.quantum", "expect": "64"}
              ]
            }
          },
          {
            "id": "5.4",
            "name": "Monitoring tools",
            "description": "Visual feedback for system stats like FPS, temps, CPU load.",
            "params": ["lm-sensors", "mangohud"],
            "tags": ["monitoring"],
            "affected": ["system"],
            "scriptTemplate": [
              "sudo apt install lm-sensors mangohud -y",
              "sudo sensors-detect --auto"
            ],
            "verification": {
              "commands": [
                {"cmd": "sensors", "expect": "should show CPU/GPU temps"},
                {"cmd": "mangohud --version", "expect": "should show version"}
              ]
            }
          }
        ]
      },
  
      "scheduler": {
        "items": [
          {
            "id": "6.1",
            "name": "Migration cost tuning",
            "description": "Reduces unnecessary task switching on Ryzen CPUs.",
            "params": ["kernel.sched_migration_cost_ns=5000000"],
            "tags": ["scheduler", "cpu"],
            "affected": ["cpu"],
            "scriptTemplate": [
              "echo 'kernel.sched_migration_cost_ns=5000000' | sudo tee -a /etc/sysctl.d/99-gaming.conf"
            ],
            "verification": {
              "command": "cat /proc/sys/kernel/sched_migration_cost_ns",
              "expectedOutput": "5000000"
            }
          },
          {
            "id": "6.2",
            "name": "Core isolation (Advanced)",
            "description": "Dedicates specific CPU cores to real-time or gaming tasks using GRUB parameters. ⚠️ WARNING: This may interfere with systemd timers, desktop responsiveness, or background services if misconfigured. Use only if you understand CPU affinity and isolation implications.",
            "params": [
              "isolcpus=1-7",
              "nohz_full=1-7",
              "rcu_nocbs=1-7"
            ],
            "tags": ["cpu", "latency", "advanced"],
            "affected": ["cpu", "scheduler"],
            "scriptTemplate": [
              "sudo sed -i 's/GRUB_CMDLINE_LINUX_DEFAULT=\"/GRUB_CMDLINE_LINUX_DEFAULT=\"isolcpus=1-7 nohz_full=1-7 rcu_nocbs=1-7 /' /etc/default/grub",
              "sudo update-grub",
              "sudo reboot"
            ],
            "verification": {
              "commands": [
                {"cmd": "cat /proc/cmdline | grep -o 'isolcpus=1-7'", "expect": "isolcpus=1-7"},
                {"cmd": "dmesg | grep -i 'isolated cpu'", "expect": "should show isolated CPUs"}
              ],
              "warning": "Verify system stability after this change"
            }
          },
          {
            "id": "6.3",
            "name": "CPU affinity",
            "description": "Pin processes to dedicated CPU cores.",
            "params": [],
            "tags": ["cpu", "affinity"],
            "affected": ["cpu"],
            "scriptTemplate": [
              "# Example: taskset -c 2-5 ./game-binary"
            ],
            "verification": {
              "command": "taskset -cp $$",
              "note": "Use to check current process affinity"
            }
          },
          {
            "id": "6.4",
            "name": "Disable autogroup",
            "description": "Prevents the scheduler from grouping tasks, improving predictability.",
            "params": ["kernel.sched_autogroup_enabled=0"],
            "tags": ["scheduler"],
            "affected": ["cpu"],
            "scriptTemplate": [
              "echo 'kernel.sched_autogroup_enabled=0' | sudo tee -a /etc/sysctl.d/99-gaming.conf"
            ],
            "verification": {
              "command": "cat /proc/sys/kernel/sched_autogroup_enabled",
              "expectedOutput": "0"
            }
          }
        ]
      },
  
      "driversFirmware": {
        "items": [
          {
            "id": "7.1",
            "name": "AMD GPU Firmware",
            "description": "Installs AMD microcode and firmware updates for Radeon GPUs.",
            "tags": ["firmware", "gpu"],
            "affected": ["gpu"],
            "scriptTemplate": [
              "sudo apt install linux-firmware-amd -y",
              "sudo apt install amdgpu-install --no-install-recommends -y"
            ],
            "verification": {
              "commands": [
                {"cmd": "dmesg | grep -i firmware", "expect": "should show loaded firmware"},
                {"cmd": "ls /lib/firmware/amdgpu", "expect": "should list firmware files"}
              ]
            }
          },
          {
            "id": "7.2",
            "name": "Mesa Drivers (Kisak PPA)",
            "description": "Upgrades to newer Mesa drivers for improved Vulkan/OpenGL support on AMD iGPU.",
            "tags": ["graphics", "mesa"],
            "affected": ["gpu"],
            "scriptTemplate": [
              "sudo add-apt-repository ppa:kisak/kisak-mesa -y",
              "sudo apt update",
              "sudo apt upgrade -y"
            ],
            "verification": {
              "commands": [
                {"cmd": "apt policy mesa-vulkan-drivers", "expect": "should show kisak PPA version"},
                {"cmd": "glxinfo | grep -i 'OpenGL version'", "expect": "should show updated version"}
              ]
            }
          }
        ]
      },
  
      "thermalControls": {
        "items": [
          {
            "id": "8.1",
            "name": "Thermal Controls (RyzenAdj)",
            "description": "Tweak AMD mobile CPU thermal power limits for sustained performance.",
            "tags": ["cpu", "thermal"],
            "affected": ["cpu"],
            "scriptTemplate": [
              "sudo apt install ryzenadj -y",
              "ryzenadj --stapm-limit=30000 --fast-limit=30000 --slow-limit=30000"
            ],
            "verification": {
              "command": "ryzenadj --info | grep -i 'STAPM LIMIT'",
              "expectedOutput": "should show 30000"
            }
          }
        ]
      }
    },
  
    "implementation": {
      "finalSteps": [
        {
          "name": "Consolidate GRUB parameters",
          "scriptTemplate": ["sudo update-grub"],
          "verification": "Verify with: cat /proc/cmdline"
        },
        {
          "name": "Apply sysctl and system changes",
          "scriptTemplate": [
            "sudo sysctl --system",
            "sudo systemctl daemon-reexec"
          ],
          "verification": "Check with: sysctl -a | grep -e dirty_ -e swappiness"
        },
        {
          "name": "Benchmark performance",
          "scriptTemplate": [
            "mangohud glxgears",
            "mangohud vkmark",
            "latencytop"
          ],
          "verification": "Compare results before/after optimizations"
        }
      ],
      "biosRecommendations": [
        "Enable 4GB VRAM (Verify with: sudo lspci -v -s $(lspci | grep -i vga | cut -d' ' -f1))",
        "Enable Smart Access Memory (Verify in BIOS)",
        "Update to latest BIOS/AGESA (Check manufacturer site)"
      ],
      "thermalManagement": [
        "Monitor with: watch -n1 sensors",
        "Adjust TDP limits if thermal throttling occurs"
      ],
      "maintenance": [
        "Monthly: sudo apt update && sudo apt upgrade",
        "After kernel updates: verify GRUB and sysctl settings",
        "Quarterly: Re-run benchmarks to detect performance drift"
      ],
      "securityNotice": "WARNING: Disabling mitigations (1.4) and core isolation (6.2) reduce security. Only use on trusted gaming systems, not for production/work machines.",
      "backupRecommendations": [
        "Backup GRUB config: sudo cp /etc/default/grub /etc/default/grub.bak",
        "Backup sysctl config: sudo cp /etc/sysctl.conf /etc/sysctl.conf.bak"
      ]
    }
  };
  
