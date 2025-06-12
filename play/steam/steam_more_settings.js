// System Configuration
const systemConfiguration = {
    processor: "AMD Ryzen 9 6900HX (8 cores, 16 threads @ 3.3GHz)",
    cache: "L1 (8x32KB), L1 Data (8x32KB), L2 (8x512KB), L3 (16MB)",
    gpu: "AMD Radeon 680M (12 CUs, 768 shaders)",
    tdp: "45W",
    ram: "16GB DDR5 (Dual Channel)",
    os: "Ubuntu 24.04 LTS"
  };
  
  // Installed Flatpak Packages
  const flatpakPackages = [
    { packageName: "com.valvesoftware.Steam", configured: true },
    { packageName: "Flatseal", configured: true },
    { packageName: "ProtonUp-Qt (pupgui2)", configured: true },
    { packageName: "Gamescope", configured: true }
  ];
  
  // Installed APT Packages
  const aptPackages = [
    { packageName: "gamemode", configured: true },
    { packageName: "libgamemode0", configured: true },
    { packageName: "libgamemodeauto0", configured: true, note: "Required for automatic gamemode activation" },
    { packageName: "mangohud", configured: true },
    { packageName: "mesa-vulkan-drivers", configured: true },
    { packageName: "mesa-vulkan-drivers:i386", configured: true, note: "Required for 32-bit games" },
    { packageName: "vulkan-tools", configured: true }
  ];
  
  // Flatseal Environment Variables
  const flatsealEnvironmentVariables = [
    { variable: "RADV_PERFTEST=aco,rt", description: "Enables ACO compiler and RT", configured: true },
    { variable: "AMD_VULKAN_ICD=RADV", description: "Forces RADV Vulkan driver", configured: true },
    { variable: "VK_ICD_FILENAMES=/usr/share/vulkan/icd.d/radeon_icd.x86_64.json", description: "Specifies Vulkan ICD file", configured: true },
    
    // Proton/Wine optimizations
    { variable: "DXVK_ASYNC=1", description: "Enables async shader compilation (Note: DXVK_ASYNC=2 recommended for newer Proton)", configured: true },
    { variable: "PROTON_USE_WINED3D=0", description: "Forces DX11 games to use DXVK", configured: true },
    { variable: "VKD3D_CONFIG=no_upload_hvv", description: "Optimizes VRAM usage for D3D12", configured: true },
    { variable: "PROTON_HIDE_NVIDIA_GPU=0", description: "Nvidia-specific setting (no effect on AMD)", configured: true, warning: "Only relevant for Nvidia GPUs" },
    { variable: "PROTON_ENABLE_NVAPI=1", description: "Nvidia-specific setting (no effect on AMD)", configured: true, warning: "Only relevant for Nvidia GPUs" },
    { variable: "PROTON_LOG=0", description: "Disables debug logging to prevent slowdowns", configured: true },
    
    // Gamemode + HUD
    { variable: "GAME_MODE=1", description: "Feral's legacy GameMode variable", configured: true },
    { variable: "GAMEMODERUN=1", description: "Runs games with gamemode", configured: true },
    { variable: "MANGOHUD=1", description: "Enables MangoHUD overlay", configured: true },
    { variable: "MANGOHUD_CONFIG=fps_limit=60,position=top-left,no_display=0,gpu_stats=1,gpu_temp=1", 
      description: "Configures MangoHUD display settings", configured: true },
    
    // iGPU-specific tuning
    { variable: "R600_DEBUG=nohyperz", description: "Disables HyperZ for R600 GPUs", configured: true },
    { variable: "RADV_DEBUG=nodcc", description: "Disables DCC (Delta Color Compression)", configured: true },
    { variable: "mesa_glthread=true", description: "Enables multithreaded OpenGL", configured: true },
    
    // Memory Management
    { variable: "PROTON_FORCE_LARGE_ADDRESS_AWARE=1", description: "Enables >2GB memory support for Windows executables", configured: true },
    { variable: "WINE_LARGE_ADDRESS_AWARE=1", description: "Enables >2GB memory support for Wine processes", configured: true }
  ];
  
  // Flatseal Filesystem Access Permissions
  const flatsealFileAccessPermissions = [
    { path: "/mnt/ldata/games/steam:rw", configured: true, description: "Steam library location" },
    { path: "~/.local/share:rw", configured: true, description: "User application data" },
    { path: "~/.cache:rw", configured: true, description: "Cache files" },
    { path: "~/.config:rw", configured: true, description: "Configuration files" },
    { path: "~/.steam:rw", configured: true, description: "Steam client files" },
    { path: "~/.var/app:rw", configured: true, description: "Flatpak application data" },
    { path: "/tmp:rw", configured: true, description: "Temporary files" }
  ];
  
  // Flatseal Filesystem Device Permissions
  const flatsealDevicePermissions = [
    {
      permission: "--device=dri",
      configured: true,
      explanation: [
        "Grants access to Direct Rendering Infrastructure (DRI)",
        "Required for GPU acceleration in games",
        "Allows Vulkan/OpenGL applications to use the GPU"
      ]
    },
    {
      permission: "--share=ipc",
      configured: true,
      explanation: [
        "Enables Inter-Process Communication (IPC) sharing",
        "Needed for Steam client ↔ game communication",
        "Allows shared memory between processes"
      ]
    }
  ];
  
  // CPU Affinity and Launch Options
  const cpuAffinity = {
    launchOptions: [
      { 
        type: "default", 
        command: "gamemoderun taskset -c 8-15 gamescope -f -e -- %command%",
        note: "Isolates game to cores 8-15 with full gamescope features"
      },
      { 
        type: "720p", 
        command: "gamemoderun taskset -c 8-15 gamescope -W 1280 -H 720 -f -- %command%",
        note: "720p low-res performance mode with core isolation"
      }
    ],
    breakdown: [
      { command: "gamemoderun", value: "(no value)", explanation: "Wrapper that activates Feral GameMode optimizations", required: false },
      { command: "taskset", value: "-c 8-15", explanation: "Pins process to CPU cores 8-15 (for core isolation)", required: false },
      { command: "gamescope", value: "(no value)", explanation: "Compositor that provides better fullscreen performance", required: false },
      { command: "-W", value: "1280", explanation: "Sets output width in pixels (here 720p width)", required: false },
      { command: "-H", value: "720", explanation: "Sets output height in pixels (here 720p height)", required: false },
      { command: "-f", value: "(flag)", explanation: "Forces fullscreen mode", required: false },
      { command: "-e", value: "(flag)", explanation: "Enables vsync (adaptive sync if available)", required: false },
      { command: "--", value: "(separator)", explanation: "Indicates end of gamescope options", required: true },
      { command: "%command%", value: "(Steam placeholder)", explanation: "Replaced with actual game executable command", required: true }
    ],
    note: "Cores 8-15 are isolated from system tasks for dedicated game performance"
  };
  
  // Kernel Boot Parameters
  const kernelBootParameters = {
    grubCmdlineLinuxDefault:
      "quiet splash amdgpu.ppfeaturemask=0xffffffff mitigations=off nowatchdog preempt=full nohz_full=8-15 threadirqs rcu_nocbs=8-15 rcutree.enable_rcu_lazy=1 amdgpu.sg_display=0 amdgpu.dc=1 amdgpu.vm_fragment_size=9 isolcpus=8-15",
    parameters: [
      { parameter: "quiet", value: "(none)", explanation: "Suppresses boot messages for cleaner startup", recommendedFor: "All systems" },
      { parameter: "splash", value: "(none)", explanation: "Enables splash screen during boot", recommendedFor: "All systems" },
      { 
        parameter: "amdgpu.ppfeaturemask", 
        value: "0xffffffff", 
        explanation: "Enables all AMD GPU power/performance features", 
        recommendedFor: "AMD GPU systems",
        warning: "Experimental features may affect stability"
      },
      { 
        parameter: "mitigations", 
        value: "off", 
        explanation: "Disables CPU vulnerability mitigations for performance", 
        recommendedFor: "Gaming systems",
        securityNote: "Reduces protection against CPU vulnerabilities"
      },
      { parameter: "nowatchdog", value: "(none)", explanation: "Disables hardware watchdog timers", recommendedFor: "Performance tuning" },
      { parameter: "preempt", value: "full", explanation: "Enables full preemption for lower latency", recommendedFor: "Low-latency needs" },
      { parameter: "nohz_full", value: "8-15", explanation: "Disables timer interrupts on cores 8-15", recommendedFor: "Core isolation" },
      { parameter: "threadirqs", value: "(none)", explanation: "Forces thread-specific IRQs for better core isolation", recommendedFor: "Core isolation" },
      { parameter: "rcu_nocbs", value: "8-15", explanation: "Moves RCU callbacks from cores 8-15 to others", recommendedFor: "Core isolation" },
      { parameter: "rcutree.enable_rcu_lazy", value: "1", explanation: "Enables lazy RCU callback processing for better perf", recommendedFor: "Performance tuning" },
      { parameter: "amdgpu.sg_display", value: "0", explanation: "Disables scatter-gather display support", recommendedFor: "AMD GPU systems" },
      { parameter: "amdgpu.dc", value: "1", explanation: "Enables Display Core hardware acceleration", recommendedFor: "AMD GPU systems" },
      { parameter: "amdgpu.vm_fragment_size", value: "9", explanation: "Sets VM fragment size (512MB chunks) for better allocation", recommendedFor: "AMD GPU systems" },
      { parameter: "isolcpus", value: "8-15", explanation: "Isolates cores 8-15 from general kernel scheduling", recommendedFor: "Core isolation" }
    ],
    postEditSteps: [
      { command: "sudo update-grub", description: "Applies GRUB configuration changes", executed: false },
      { command: "sudo reboot", description: "Required for kernel parameters to take effect", executed: false }
    ],
    note: "Isolating cores 8-15 (not 1-15) prevents starving the OS of CPU resources"
  };
  
  // CPU Governor Setup
  const cpuGovernorConfiguration = {
    commands: [
      { id: 1, command: "sudo apt install cpufrequtils", description: "Install CPU frequency scaling utilities", executed: false },
      { id: 2, command: "echo 'GOVERNOR=\"performance\"' | sudo tee /etc/default/cpufrequtils", description: "Set performance governor as default", executed: false },
      { id: 3, command: "sudo systemctl enable cpufrequtils", description: "Enable service", executed: false },
      { id: 4, command: "sudo cpufreq-set -g performance", description: "Apply immediately", executed: false }
    ],
    note: "Performance governor keeps CPU at maximum frequency for consistent gaming performance"
  };
  
  // VRAM Allocation Configuration
  const vramConfiguration = {
    recommendation: "Set UMA Buffer Size or Shared Memory in BIOS",
    options: [
      { size: "2GB", recommendedFor: "Most games" },
      { size: "4GB", recommendedFor: "Texture-heavy games", note: "May be excessive for many titles" }
    ]
  };
  
  // Sysctl Tuning
  const sysctlTuning = {
    configFile: "/etc/sysctl.d/99-gaming.conf",
    parameters: [
      { setting: "vm.compaction_proactiveness=0", description: "Reduces background memory compaction", configured: true },
      { setting: "vm.dirty_ratio=5", description: "Maximum % of dirty memory before writeback", configured: true },
      { setting: "vm.dirty_background_ratio=5", description: "% of dirty memory to start writeback", configured: true },
      { setting: "vm.swappiness=10", description: "How aggressively to swap (10=moderate)", configured: true },
      { setting: "vm.vfs_cache_pressure=50", description: "Filesystem cache retention (50=balanced)", configured: true },
      { setting: "kernel.numa_balancing=0", description: "Disables NUMA balancing for AMD systems", configured: true },
      { setting: "kernel.sched_energy_aware=0", description: "Disables energy-aware scheduling", configured: true }
    ],
    postEditSteps: [
      { command: "sudo sysctl --system", description: "Applies all sysctl changes", executed: false },
      { command: "cat /proc/cmdline | grep isolcpus", description: "Verify core isolation", executed: false }
    ]
  };
  
  // Runtime Performance Mode
  const runtimePerformanceMode = {
    command: "echo performance | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor",
    description: "Sets CPU governor to 'performance' mode for all CPU cores at runtime",
    executed: false,
    note: "Temporary setting that resets on reboot (use cpufrequtils for persistence)"
  };