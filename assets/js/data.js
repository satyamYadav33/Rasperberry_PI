// SBC Hub Comprehensive Dataset: Raspberry Pi & Radxa
window.SBC_DATA = {
  // Brand summaries
  brands: {
    rpi: {
      name: "Raspberry Pi",
      origin: "United Kingdom (Cambridge)",
      tagline: "The World's Most Popular Computing Platform",
      philosophy: "Democratizing computing, education, plug-and-play ease, and unmatched software ecosystem.",
      accentColor: "#E30B5C",
      logoBadge: "Raspberry Pi Foundation",
      communityScale: "Millions of makers, schools, and enterprise deployments.",
      highlight: "Guaranteed OS support, endless tutorials, plug-and-play HAT ecosystem."
    },
    radxa: {
      name: "Radxa",
      origin: "Shenzhen, China",
      tagline: "High-Performance Edge Computing Powerhouses",
      philosophy: "Bleeding-edge silicon, desktop-grade I/O (Dual 2.5G, Dual M.2), raw compute, and hardware innovation.",
      accentColor: "#00E676",
      logoBadge: "Radxa Open Hardware",
      communityScale: "Armbian & Linux power users, edge AI engineers, home-lab enthusiasts.",
      highlight: "Octa-core 5nm silicon, 29+ TOPS NPUs, native dual NVMe, multi-gigabit networking."
    }
  },

  // SBC Model Catalog
  models: [
    {
      id: "rpi-5",
      brand: "Raspberry Pi",
      name: "Raspberry Pi 5",
      badge: "Flagship Pi",
      releaseYear: 2023,
      soc: "Broadcom BCM2712 (16nm)",
      cpu: "Quad-core ARM Cortex-A76 @ 2.4 GHz",
      gpu: "Broadcom VideoCore VII @ 800 MHz (Vulkan 1.2, OpenGL ES 3.1)",
      npu: "None onboard (Optional Raspberry Pi AI HAT+ with Hailo-8L up to 26 TOPS)",
      npuTops: 0,
      ramOptions: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      ramType: "LPDDR4X-4267 (32-bit)",
      storage: "MicroSD (high-speed SDR104), PCIe 2.0 x1 FPC (requires external HAT for NVMe)",
      network: "1x Gigabit Ethernet (1000 Mbps) with PoE+ HAT support",
      wireless: "Dual-band 802.11ac Wi-Fi, Bluetooth 5.0 / BLE",
      usbPorts: "2x USB 3.0 (5Gbps), 2x USB 2.0, 1x USB-C Power",
      videoOutput: "2x micro-HDMI (4K@60Hz with HDR)",
      pcie: "1x PCIe 2.0 x1 (via custom 16-pin ribbon cable)",
      gpio: "Standard 40-pin GPIO header",
      power: "5V / 5A (27W USB-C PD proprietary profile)",
      cooling: "Passive or Official Active Cooler (PWM Fan + Extruded Heatsink)",
      formFactor: "Standard Credit Card (85 x 56 mm)",
      osSupport: ["Raspberry Pi OS (Bookworm)", "Ubuntu Server/Desktop", "DietPi", "Kali Linux", "LibreELEC"],
      priceRange: "$45 - $305 (1GB to 16GB)",
      strengths: [
        "Unbeatable community support & beginner guides",
        "Official Raspberry Pi OS optimized specifically for BCM2712",
        "Thousands of standard HAT accessories",
        "Rock-solid official camera & display CSI/DSI support",
        "Low power standby consumption"
      ],
      idealFor: ["Education & STEM", "IoT & Sensor Logging", "Home Assistant", "Retro Gaming", "Light Desktop Workstation"]
    },
    {
      id: "radxa-dragon-q8b",
      brand: "Radxa",
      name: "Radxa Dragon Q8B",
      badge: "Intelligent Edge Flagship",
      releaseYear: 2024,
      soc: "Qualcomm Snapdragon 8cx Gen 3 (SC8280XP - 5nm)",
      cpu: "Octa-core Qualcomm Kryo 64-bit (4x Prime cores @ 3.0GHz + 4x Gold cores @ 2.4GHz)",
      gpu: "Qualcomm Adreno 690 (DirectX, Vulkan 1.3, OpenCL 2.0, DirectML)",
      npu: "Built-in Qualcomm Hexagon NPU delivering 29+ TOPS AI compute",
      npuTops: 29.5,
      ramOptions: ["4GB", "8GB", "16GB", "32GB"],
      ramType: "8-channel LPDDR4X (128-bit bus, up to 4266 MT/s)",
      storage: "2x Native M.2 M-Key slots (1x PCIe 3.0 x4, 1x PCIe 3.0 x2), UFS 3.1 connector, MicroSD",
      network: "2x 2.5GbE (2500 Mbps) RJ45 Ethernet ports",
      wireless: "M.2 Key-E slot for high-speed Wi-Fi 6E/7 & Bluetooth 5.3",
      usbPorts: "2x USB 3.2 Gen 2 Type-C (with DP Alt Mode), 2x USB 3.2 Gen 2 Type-A, 2x USB 2.0 Type-A",
      videoOutput: "Triple 4K120: 1x HDMI 2.1 (up to 4K@120Hz) + 2x USB-C DisplayPort 1.4 (up to 4K@120Hz)",
      pcie: "Native PCIe Gen3 (x4 and x2 M.2 sockets) + 16-pin PCIe Gen3 x1 FFC",
      gpio: "40-pin color-coded GPIO header",
      power: "USB-C Power Delivery (PD 20V/3A 60W+ recommended)",
      cooling: "High-surface black heatsink with Radxa custom PWM fan",
      formFactor: "Extended Edge Motherboard (100 x 75 mm)",
      osSupport: ["Windows 11 on ARM", "Ubuntu 24.04", "Armbian", "Radxa OS", "Qualcomm Linux / Debian"],
      priceRange: "$160 - $350 (depending on RAM 8GB/16GB/32GB)",
      strengths: [
        "Monster 29+ TOPS NPU for on-device LLMs & vision AI",
        "Dual 2.5GbE ports - instant high-speed router/firewall",
        "Dual M.2 M-Key slots for blistering NVMe SSD RAID (no HATs needed!)",
        "128-bit 8-channel memory bandwidth crushing 32-bit Pi 5",
        "Triple 4K@120Hz display outputs with full HDMI 2.1 and DP Alt-Mode",
        "Full Windows 11 on ARM & Linux dual-boot capability"
      ],
      idealFor: ["Local AI & LLM Inference (Ollama)", "TrueNAS & High-speed 2.5G NAS", "pfSense/OPNsense Router", "Kubernetes Micro-Cloud", "Heavy Dev Workstation"]
    },
    {
      id: "radxa-rock-5b-plus",
      brand: "Radxa",
      name: "Radxa Rock 5B / 5B+",
      badge: "8K Rockchip Beast",
      releaseYear: 2023,
      soc: "Rockchip RK3588 (8nm)",
      cpu: "Octa-core (4x Cortex-A76 @ 2.4GHz + 4x Cortex-A55 @ 1.8GHz)",
      gpu: "ARM Mali-G610 MP4 (OpenGLES 3.2, Vulkan 1.2, OpenCL 2.2)",
      npu: "Built-in 6 TOPS Tri-core NPU (INT4/INT8/INT16/FP16)",
      npuTops: 6,
      ramOptions: ["4GB", "8GB", "16GB", "24GB", "32GB"],
      ramType: "LPDDR4X (64-bit)",
      storage: "1x M.2 M-Key (PCIe 3.0 x4), eMMC 5.1 socket, MicroSD slot",
      network: "1x 2.5GbE RJ45 (or dual on 5B+)",
      wireless: "M.2 Key-E slot for Wi-Fi 6 / BT 5.2",
      usbPorts: "1x USB-C PD, 2x USB 3.0, 2x USB 2.0",
      videoOutput: "Dual HDMI 2.1 (up to 8K@60Hz) + USB-C DP (8K@30Hz) + Micro-HDMI In",
      pcie: "PCIe 3.0 x4 native M.2 slot",
      gpio: "40-pin GPIO header",
      power: "USB-C PD 9V-20V (24W - 45W)",
      cooling: "Active heatsink or fan bracket",
      formFactor: "Standard Pico-ITX (100 x 72 mm)",
      osSupport: ["Ubuntu", "Debian", "Armbian", "Android 12", "Joshua-Riek Ubuntu"],
      priceRange: "$95 - $220",
      strengths: [
        "Native 8K@60Hz video decode and HDMI input",
        "Fast PCIe 3.0 x4 NVMe on board",
        "Up to 32GB RAM capacity",
        "Hardware H.264/H.265/AV1 video decoding engine"
      ],
      idealFor: ["8K Media Center", "Computer Vision Clusters", "Android TV Gaming", "Video Recording & HDMI In"]
    },
    {
      id: "rpi-4b",
      brand: "Raspberry Pi",
      name: "Raspberry Pi 4 Model B",
      badge: "The Legend",
      releaseYear: 2019,
      soc: "Broadcom BCM2711 (28nm)",
      cpu: "Quad-core ARM Cortex-A72 @ 1.8 GHz",
      gpu: "Broadcom VideoCore VI @ 500 MHz",
      npu: "None",
      npuTops: 0,
      ramOptions: ["2GB", "4GB", "8GB"],
      ramType: "LPDDR4-3200",
      storage: "MicroSD card",
      network: "1x Gigabit Ethernet (1000 Mbps)",
      wireless: "Dual-band 802.11ac Wi-Fi, Bluetooth 5.0",
      usbPorts: "2x USB 3.0, 2x USB 2.0, 1x USB-C Power",
      videoOutput: "2x micro-HDMI (4K@60Hz / 4K@30Hz dual)",
      pcie: "None exposed (used internally for USB 3)",
      gpio: "Standard 40-pin GPIO header",
      power: "5V / 3A (15W USB-C)",
      cooling: "Passive or Small fan",
      formFactor: "Standard Credit Card (85 x 56 mm)",
      osSupport: ["Raspberry Pi OS", "Ubuntu", "DietPi", "Home Assistant OS"],
      priceRange: "$35 - $75",
      strengths: [
        "Gold-standard compatibility across 10,000+ open-source projects",
        "Massive global stock availability",
        "Low thermal load compared to Pi 5",
        "Effortless Home Assistant & OctoPrint setup"
      ],
      idealFor: ["Home Assistant Core", "OctoPrint 3D Printing", "Pi-hole DNS Server", "Makers & Schools"]
    },
    {
      id: "radxa-zero-3w",
      brand: "Radxa",
      name: "Radxa Zero 3W / 3E",
      badge: "Pocket Rocket",
      releaseYear: 2023,
      soc: "Rockchip RK3566 (22nm)",
      cpu: "Quad-core Cortex-A55 @ 1.6 GHz",
      gpu: "ARM Mali-G52 2EE",
      npu: "Built-in 0.8 TOPS NPU",
      npuTops: 0.8,
      ramOptions: ["1GB", "2GB", "4GB", "8GB"],
      ramType: "LPDDR4",
      storage: "MicroSD card or onboard eMMC (up to 64GB)",
      network: "Wi-Fi 4/5 or Gigabit Ethernet on Zero 3E",
      wireless: "Wi-Fi 4/5 (802.11 b/g/n/ac) + BT 5.0",
      usbPorts: "1x USB 3.0 Type-C (Host), 1x USB 2.0 Type-C (OTG/Power)",
      videoOutput: "1x Micro-HDMI (1080p@60Hz / 4K@60Hz)",
      pcie: "None",
      gpio: "40-pin GPIO color coded",
      power: "5V / 2A via USB-C",
      cooling: "Passive heatsink",
      formFactor: "Zero Stick (65 x 30 mm)",
      osSupport: ["Debian", "Ubuntu", "Armbian"],
      priceRange: "$15 - $45",
      strengths: [
        "Destroys Pi Zero 2W with up to 8GB RAM (vs 512MB)",
        "USB 3.0 Type-C speed in pocket format",
        "Onboard eMMC option for fast boot",
        "0.8 TOPS NPU for small vision models"
      ],
      idealFor: ["Miniature Drones", "Smart Dashboards", "Handheld Retro Emulators", "Wearable Edge Tech"]
    },
    {
      id: "rpi-zero-2w",
      brand: "Raspberry Pi",
      name: "Raspberry Pi Zero 2 W",
      badge: "Compact Classic",
      releaseYear: 2021,
      soc: "Broadcom BCM2710A1 (40nm/28nm package)",
      cpu: "Quad-core Cortex-A53 @ 1.0 GHz",
      gpu: "VideoCore IV",
      npu: "None",
      npuTops: 0,
      ramOptions: ["512MB"],
      ramType: "LPDDR2 (SiP)",
      storage: "MicroSD card",
      network: "Wi-Fi (802.11 b/g/n 2.4GHz)",
      wireless: "Wi-Fi 4 + Bluetooth 4.2 / BLE",
      usbPorts: "1x Micro-USB OTG, 1x Micro-USB Power",
      videoOutput: "1x Mini-HDMI",
      pcie: "None",
      gpio: "40-pin unpopulated header",
      power: "5V / 2.5A Micro-USB",
      cooling: "Passive",
      formFactor: "Zero Stick (65 x 30 mm)",
      osSupport: ["Raspberry Pi OS Lite", "DietPi", "RetroPie"],
      priceRange: "$15 - $20",
      strengths: [
        "Incredible energy efficiency (sub-1W idle)",
        "Drop-in replacement for original Pi Zero cases",
        "Official Raspberry Pi OS Lite support"
      ],
      idealFor: ["Battery-powered IoT sensors", "Simple surveillance camera", "RetroPie Game Boy Zero mods"]
    },
    {
      id: "radxa-rock-5-itx",
      brand: "Radxa",
      name: "Radxa Rock 5 ITX",
      badge: "NAS & Mini-PC Board",
      releaseYear: 2024,
      soc: "Rockchip RK3588 (8nm)",
      cpu: "Octa-core (4x A76 @ 2.4GHz + 4x A55 @ 1.8GHz)",
      gpu: "ARM Mali-G610 MP4",
      npu: "Built-in 6 TOPS NPU",
      npuTops: 6,
      ramOptions: ["8GB", "16GB", "32GB"],
      ramType: "LPDDR5",
      storage: "4x SATA 3.0 ports, 1x M.2 M-Key (PCIe 3.0 x4), eMMC, MicroSD",
      network: "2x 2.5GbE RJ45 Ethernet ports (with PoE option)",
      wireless: "M.2 Key-E for Wi-Fi 6E",
      usbPorts: "4x USB 3.0, 2x USB 2.0, Front panel header",
      videoOutput: "1x HDMI 2.1 (8K), 1x HDMI 2.0 (4K), 1x DP, 1x eDP, 1x HDMI In",
      pcie: "PCIe 3.0 x4 M.2 + PCIe x1 slot",
      gpio: "Standard headers + ATX 24-pin or 12V DC in",
      power: "Standard 24-pin ATX PSU or 12V DC barrel jack",
      cooling: "Standard CPU cooler mounts (Intel LGA115x compatible)",
      formFactor: "Standard Mini-ITX (170 x 170 mm)",
      osSupport: ["Ubuntu", "Armbian", "TrueNAS SCALE (experimental)", "Debian"],
      priceRange: "$150 - $260",
      strengths: [
        "Fits any standard Mini-ITX PC chassis",
        "Native 4x SATA drives for massive NAS storage",
        "Standard PC power supply support",
        "Dual 2.5GbE networking out of the box"
      ],
      idealFor: ["Dedicated All-Flash or HDD NAS", "Silent Home Server", "ARM Home Automation Hub", "Micro-Virtualization"]
    },
    {
      id: "rpi-cm4-cm5",
      brand: "Raspberry Pi",
      name: "Raspberry Pi CM4 & CM5",
      badge: "Industrial Module",
      releaseYear: 2024,
      soc: "Broadcom BCM2712 (CM5) / BCM2711 (CM4)",
      cpu: "Quad-core Cortex-A76 (CM5) or A72 (CM4)",
      gpu: "VideoCore VII (CM5)",
      npu: "Via Carrier Board PCIe M.2",
      npuTops: 0,
      ramOptions: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      ramType: "LPDDR4X",
      storage: "Optional onboard eMMC (up to 64GB) + dual PCIe lanes",
      network: "Gigabit Ethernet PHY",
      wireless: "Optional onboard Wi-Fi & Bluetooth with external antenna U.FL",
      usbPorts: "Exposed via 100-pin mezzanine connectors",
      videoOutput: "Dual HDMI, dual MIPI-DSI",
      pcie: "PCIe Gen 2 / Gen 3 via carrier board",
      gpio: "All pins routed to baseboard",
      power: "5V regulated",
      cooling: "Industrial thermal heat-spreader",
      formFactor: "Hirose Mezzanine Module (55 x 40 mm)",
      osSupport: ["Raspberry Pi OS", "Yocto Linux", "Ubuntu Core"],
      priceRange: "$35 - $115",
      strengths: [
        "Engineered for deep industrial integration",
        "Onboard reliable eMMC storage immune to SD card corruption",
        "Hundreds of custom carrier boards (Turing Pi 2, DeskPi, etc.)"
      ],
      idealFor: ["Industrial Automation", "Commercial Products", "Edge Kiosks", "Blade Server Clusters"]
    }
  ],

  // 6 Detailed Real-World Use Cases
  useCases: [
    {
      id: "edge-ai",
      title: "Edge AI, Computer Vision & Local LLMs",
      shortDesc: "Run on-device AI inference, YOLOv8 object detection, and quantized LLMs (Llama 3 / Mistral) without cloud lag.",
      icon: "cpu",
      category: "Artificial Intelligence",
      rpiApproach: {
        title: "Raspberry Pi 5 Approach",
        description: "Pi 5 has no onboard NPU. CPU inference on Cortex-A76 yields ~1-2 tokens/sec on 1B LLMs. To achieve competitive AI, you must install the official $70+ Raspberry Pi AI HAT+ with a Hailo-8L NPU chip (offering 13 to 26 TOPS via PCIe FPC ribbon).",
        specs: "0 TOPS onboard → Up to 26 TOPS with $70 AI HAT+ add-on",
        pros: ["Official Raspbian hailort packages", "Camera module CSI seamless integration", "Pre-built PyTorch / TFLite examples"],
        cons: ["Requires extra HAT+ board stacking", "Consumes sole PCIe 2.0 x1 slot (cannot use NVMe and NPU simultaneously without specialized dual-carrier)", "Lower memory bandwidth (32-bit bus) limits large model weights"]
      },
      radxaApproach: {
        title: "Radxa Dragon Q8B Approach",
        description: "Houses a Qualcomm Snapdragon 8cx Gen 3 with a dedicated Hexagon NPU producing 29+ TOPS built right onto the motherboard! Coupled with 8-channel 128-bit memory bus and up to 32GB RAM, it can run 7B and 8B models (Llama 3.2, Qwen 2.5) locally at 12-18 tokens/sec without adding a single dollar in accessories.",
        specs: "29+ TOPS NPU native + 128-bit memory bus + up to 32GB RAM",
        pros: ["Zero add-on cost for 29+ TOPS AI power", "Massive 128-bit RAM bandwidth feeds weights at extreme speeds", "Leaves dual M.2 NVMe slots free for lightning-fast vector DB storage", "DirectML and Qualcomm Neural Processing SDK support"],
        cons: ["Qualcomm NPU toolchain has a steeper learning curve than simple Raspberry Pi python tutorials"]
      },
      recipes: [
        {
          name: "Local Edge LLM Server (Ollama + Open-WebUI)",
          difficulty: "Intermediate",
          recommendedBoard: "Radxa Dragon Q8B (16GB or 32GB)",
          codeSnippet: `# Install Ollama & run Llama 3.2 on Dragon Q8B\ncurl -fsSL https://ollama.com/install.sh | sh\nollama run llama3.2:3b\n\n# Benchmark tokens per second\nollama run llama3.2 "Explain quantum computing in 2 paragraphs" --verbose`,
          hardwareNeeded: ["Radxa Dragon Q8B (16GB)", "NVMe SSD (M.2 M-Key)", "65W USB-C PD Supply"]
        },
        {
          name: "Real-Time 30 FPS YOLOv8 Object Tracking",
          difficulty: "Beginner-Intermediate",
          recommendedBoard: "Raspberry Pi 5 + AI HAT+ OR Radxa Dragon Q8B",
          codeSnippet: `# Running YOLOv8 on Hailo / Hexagon\npip install ultralytics\nyolo predict model=yolov8n.pt source=0 show=True`,
          hardwareNeeded: ["Pi 5 (8GB) + AI HAT+ OR Dragon Q8B", "USB 3.0 or CSI Camera Module"]
        }
      ]
    },
    {
      id: "homelab-nas",
      title: "Home Lab, TrueNAS & Micro-Cloud Server",
      shortDesc: "Host personal cloud storage, Plex/Jellyfin, Home Assistant, Pi-hole, and multi-node Kubernetes clusters.",
      icon: "server",
      category: "Infrastructure",
      rpiApproach: {
        title: "Raspberry Pi 5 Approach",
        description: "Great for single-drive mini-servers. Pi 5 provides 1x Gigabit Ethernet and PCIe 2.0 x1 for 1x NVMe SSD via HAT. Highly reliable for lightweight services like Docker, Pi-hole, and Home Assistant OS.",
        specs: "1x 1GbE LAN + 1x PCIe 2.0 x1 NVMe HAT (c. 450-800 MB/s)",
        pros: ["Lowest idle power consumption (2.5W)", "Instant image flashes with Raspberry Pi Imager", "Flawless Docker & Home Assistant community support"],
        cons: ["Limited to 1GbE network bottleneck", "Only 1 NVMe drive possible; no native dual-drive redundancy (RAID 1) without slow USB enclosures"]
      },
      radxaApproach: {
        title: "Radxa Dragon Q8B / Rock 5 ITX Approach",
        description: "The dream home-lab engine. Features Dual 2.5GbE ports and Dual native M.2 M-Key slots directly on the bottom of the PCB! You can build a blazing fast 2.5G ZFS / RAID 1 mirror storage pool hitting 2500 MB/s internal throughput and 280 MB/s network transfers without extra adapters.",
        specs: "Dual 2.5GbE LAN + Dual Native M.2 NVMe (PCIe 3.0 x4 & x2) + up to 32GB RAM",
        pros: ["Native dual NVMe slots for true mirrored ZFS pool", "Dual 2.5G interfaces allow dedicated management network + storage subnet", "Octa-core 5nm CPU effortlessly transcodes media and handles 20+ containers simultaneously"],
        cons: ["Slightly higher idle power (4-6W) than Pi 5"]
      },
      recipes: [
        {
          name: "Dual-NVMe RAID 1 Resilient Storage Server",
          difficulty: "Intermediate",
          recommendedBoard: "Radxa Dragon Q8B",
          codeSnippet: `# Create ZFS Mirror on Dragon Q8B Dual M.2 slots\nsudo apt update && sudo apt install -y zfsutils-linux\nsudo zpool create -f tank mirror /dev/nvme0n1 /dev/nvme1n1\nzpool status tank\n\n# Deploy Nextcloud with Docker Compose\ndocker compose up -d`,
          hardwareNeeded: ["Radxa Dragon Q8B", "2x 1TB or 2TB M.2 2280 NVMe SSDs", "Cat6 Ethernet cable to 2.5G Switch"]
        }
      ]
    },
    {
      id: "networking-router",
      title: "2.5GbE Firewall, Router & Security Gateway",
      shortDesc: "Build your own high-speed router running OpenWrt, OPNsense, or pfSense with hardware-accelerated packet forwarding.",
      icon: "network",
      category: "Networking",
      rpiApproach: {
        title: "Raspberry Pi 5 Approach",
        description: "Pi 5 has only a single 1GbE Ethernet port. To act as a router (WAN + LAN), you must use a 'Router-on-a-stick' VLAN switch or plug in a USB-to-Ethernet adapter (which introduces CPU overhead, jitter, and USB packet drops).",
        specs: "1x 1GbE NIC only (Needs USB adapter or VLAN trunking for WAN/LAN)",
        pros: ["Low cost", "OpenWrt Pi builds widely available"],
        cons: ["USB NICs are notorious for driver drops under heavy load", "Capped at 1 Gbps WAN/LAN bandwidth"]
      },
      radxaApproach: {
        title: "Radxa Dragon Q8B Approach",
        description: "Designed from the ground up for high-throughput edge routing with 2x native 2.5GbE RJ45 ports with independent PCI buses! One port acts as 2.5G WAN directly to your multi-gig fiber ONT, and the second port feeds your 2.5G switch at wire speed with line-rate SQM (Smart Queue Management) and WireGuard VPN encryption.",
        specs: "2x Dedicated 2.5GbE RJ45 Ports (Dual Realtek/Intel controller channels)",
        pros: ["True multi-gigabit line rate (2.5 Gbps in each direction)", "Native dual NICs with zero USB dongles", "Kryo octa-core CPU handles WireGuard VPN at >1.8 Gbps throughput"],
        cons: ["Requires arm64 OpenWrt or Debian kernel network tuning"]
      },
      recipes: [
        {
          name: "Line-Rate 2.5G OpenWrt / Debian Firewall Gateway",
          difficulty: "Advanced",
          recommendedBoard: "Radxa Dragon Q8B",
          codeSnippet: `# Configure Dual 2.5G interfaces in /etc/network/interfaces\n# eth0 = WAN (DHCP from ISP Fiber ONT)\nauto eth0\niface eth0 inet dhcp\n\n# eth1 = LAN (2.5G Local Network Gateway)\nauto eth1\niface eth1 inet static\n  address 192.168.1.1/24\n\n# Enable kernel IP forwarding\nsysctl -w net.ipv4.ip_forward=1`,
          hardwareNeeded: ["Radxa Dragon Q8B", "High-speed 2.5G Managed/Unmanaged Switch", "Cat6a Patch Cables"]
        }
      ]
    },
    {
      id: "robotics-iot",
      title: "Robotics, Autonomous Vehicles & Industrial IoT",
      shortDesc: "Deploy ROS2 robotics, SLAM navigation, CAN-bus industrial telemetry, drone flight controllers, and motor drives.",
      icon: "bot",
      category: "Robotics",
      rpiApproach: {
        title: "Raspberry Pi Approach (Pi 5 & Pi Zero 2W)",
        description: "The absolute undisputed king of maker robotics. Standard 40-pin GPIO has millions of ready-to-use Python/C++ libraries (RPi.GPIO, gpiozero, pigpio). Official CSI camera interfaces support global shutter cameras, autofocus cameras, and ultrasonic/lidar sensors effortlessly.",
        specs: "40-Pin GPIO with ubiquitous software libraries + Dual MIPI CSI/DSI",
        pros: ["Endless plug-and-play motor driver HATs", "Enormous ROS2 Humble/Iron community packages for Pi OS", "Massive array of documentation for every conceivable sensor"],
        cons: ["Pi 5 uses RP1 I/O controller, which required rewriting some legacy low-level bit-banging libraries"]
      },
      radxaApproach: {
        title: "Radxa Approach (Dragon Q8B / Zero 3W)",
        description: "Radxa Zero 3W offers quad-core speed with up to 8GB RAM in a form factor matching Pi Zero 2W (ideal for lightweight drones). The Dragon Q8B brings 29+ TOPS NPU for on-bot real-time 3D SLAM, spatial depth mapping, and autonomous obstacle avoidance without requiring a heavy Nvidia Jetson.",
        specs: "High-power on-bot visual SLAM compute + 40-pin color-coded header",
        pros: ["Replaces bulky, expensive Nvidia Jetson Orin boards for AI robotics", "Dual M.2 allows recording hours of raw camera telemetry onto fast NVMe", "Radxa Zero 3W has 16x more RAM than Pi Zero 2W for robotics tasks"],
        cons: ["Fewer off-the-shelf robotics HATs; often requires custom wiring or breadboarding"]
      },
      recipes: [
        {
          name: "Autonomous Mobile Robot (ROS2 + Depth Camera + Lidar)",
          difficulty: "Advanced",
          recommendedBoard: "Radxa Dragon Q8B or Raspberry Pi 5",
          codeSnippet: `# Launch ROS2 Navigation2 stack\nsource /opt/ros/humble/setup.bash\nros2 launch turtlebot3_navigation2 navigation2.launch.py\n\n# Read IMU and wheel encoders over I2C/UART`,
          hardwareNeeded: ["SBC", "RPLidar A1/A2 360 Lidar", "Intel RealSense or CSI Cam", "Motor Controller & Chassis"]
        }
      ]
    },
    {
      id: "media-gaming",
      title: "4K120 / 8K Media Center & Retro Gaming Emulation",
      shortDesc: "Transform your living room TV into an 8K theater or a retro gaming beast emulating PS2, GameCube, Wii, and PSP.",
      icon: "gamepad-2",
      category: "Entertainment",
      rpiApproach: {
        title: "Raspberry Pi 5 Approach",
        description: "Pi 5's VideoCore VII GPU represents a huge upgrade over Pi 4. Runs RetroPie, Recalbox, and Batocera with smooth PS1, N64, Dreamcast, and arcade emulation. Handles many lightweight PSP and GameCube games. Dual micro-HDMI ports support 4K@60Hz.",
        specs: "VideoCore VII GPU @ 800 MHz + Dual 4K@60Hz Micro-HDMI",
        pros: ["Huge retro community, custom pre-built SD card images", "Clean CEC TV remote support over HDMI", "Flawless Bluetooth controller pairing out of the box"],
        cons: ["Cannot run heavy PS2, Wii, or Switch titles smoothly", "Micro-HDMI connectors require fragile adapter cables", "No 4K@120Hz or 8K output support"]
      },
      radxaApproach: {
        title: "Radxa Dragon Q8B / Rock 5B Approach",
        description: "Adreno 690 GPU (on Dragon Q8B) and Mali-G610 MP4 (on Rock 5B) bring console-grade horsepower to SBCs. The Dragon Q8B supports true HDMI 2.1 up to 4K@120Hz and dual USB-C DP outputs. Capable of upscaling PS2, GameCube, 3DS, and Saturn to 1080p/4K with rock-solid 60 FPS.",
        specs: "Qualcomm Adreno 690 / Mali-G610 GPU + Full HDMI 2.1 (4K120 or 8K60)",
        pros: ["Full-size standard HDMI 2.1 port (no micro adapters)", "Vulkan 1.3 acceleration for PCSX2, Dolphin, PPSSPP", "Smooth 4K@120Hz high refresh rate gaming on modern OLED TVs", "Hardware AV1 4K/8K video decoder"],
        cons: ["Batocera/RetroPie community images are often community forks rather than official upstream"]
      },
      recipes: [
        {
          name: "4K120 Retro Gaming & 8K Kodi Media Hub",
          difficulty: "Beginner",
          recommendedBoard: "Radxa Dragon Q8B or Rock 5B",
          codeSnippet: `# Install Batocera or RetroArch with Vulkan\nsudo apt install -y retroarch libretro-*\n# Configure Vulkan video driver in retroarch.cfg\nsed -i 's/video_driver = "gl"/video_driver = "vulkan"/' ~/.config/retroarch/retroarch.cfg`,
          hardwareNeeded: ["Radxa Dragon Q8B or Pi 5", "Standard HDMI 2.1 Cable", "Wireless Xbox or PS5 Controller"]
        }
      ]
    },
    {
      id: "desktop-dev",
      title: "ARM Desktop Workstation & Linux/Windows Dev Rig",
      shortDesc: "A complete daily driver desktop with multi-monitor 4K displays, VS Code, Git, Docker, and full ARM Windows/Linux support.",
      icon: "monitor",
      category: "Productivity",
      rpiApproach: {
        title: "Raspberry Pi 5 Approach",
        description: "With Raspberry Pi OS (Debian Bookworm) and Wayfire Wayland compositor, Pi 5 feels like a snappy desktop for web browsing (Chromium), LibreOffice, Python development, and basic programming tasks. Supports dual 4K60 displays.",
        specs: "4x A76 cores + Dual 4K60 Micro-HDMI + 16GB max RAM",
        pros: ["Smooth Wayland desktop out of the box", "Official Chromium with hardware acceleration", "Very low power consumption for a desktop replacement"],
        cons: ["Requires micro-HDMI cables", "32-bit RAM bus and single PCIe 2.0 limit heavy compiling and multi-container workloads", "No official Windows on ARM support"]
      },
      radxaApproach: {
        title: "Radxa Dragon Q8B Approach",
        description: "A genuine workstation-class ARM PC. Octa-core Snapdragon 8cx Gen 3 was originally designed for premium laptop PCs! Features 8-channel 128-bit memory bus, up to 32GB RAM, triple 4K120 displays (1x HDMI + 2x USB-C DP Alt Mode), and native dual NVMe speeds hitting 3,500 MB/s. Furthermore, it supports official Windows 11 on ARM natively with full DirectX and driver support alongside Ubuntu 24.04.",
        specs: "Octa-core 5nm Kryo @ 3.0GHz + 32GB RAM + Triple 4K120 + Windows 11 / Ubuntu",
        pros: ["Runs full Windows 11 on ARM with x64 emulation or Ubuntu 24.04", "Triple display output for multi-screen developer setups", "128-bit memory bus compiles C++/Rust code up to 2.8x faster than Pi 5", "USB-C DP Alt Mode allows single-cable portable monitor connection with power"],
        cons: ["Priced higher for maximum spec (16GB/32GB variants)"]
      },
      recipes: [
        {
          name: "Dual-Boot Windows 11 on ARM & Ubuntu Dev Station",
          difficulty: "Intermediate",
          recommendedBoard: "Radxa Dragon Q8B (16GB or 32GB)",
          codeSnippet: `# Fast NVMe compile benchmark on Dragon Q8B\ngit clone https://github.com/torvalds/linux.git\ncd linux && make -j8\n# Time taken: ~14 mins (vs ~38 mins on Pi 5)`,
          hardwareNeeded: ["Radxa Dragon Q8B (16GB+)", "M.2 NVMe SSD 1TB (3500MB/s)", "4K Monitor with USB-C or HDMI"]
        }
      ]
    }
  ],

  // Detailed Hotspots for compare.html (referencing user's photos)
  hotspots: {
    sideBySide: [
      {
        id: "hs-ports-radxa",
        board: "radxa",
        title: "Dual 2.5GbE Multi-Gigabit Ports (Radxa)",
        x: 48, // % from left
        y: 66, // % from top
        photoRef: "side_by_side_radxa_vs_pi5.jpg",
        detail: "Radxa Dragon Q8B features TWO independent 2.5 Gigabit Ethernet ports (RJ45). Perfect for hardware routers, firewalls (pfSense/OPNsense), and dual-subnet NAS setups without any USB dongles.",
        vsPi: "Pi 5 has only a single 1GbE port (1000 Mbps). Routing requires slow USB adapters or VLAN switches."
      },
      {
        id: "hs-cooler-radxa",
        board: "radxa",
        title: "Radxa Active High-Thermal Cooler",
        x: 32,
        y: 32,
        photoRef: "side_by_side_radxa_vs_pi5.jpg",
        detail: "Massive black anodized aluminum heatsink with heavy spring-loaded retention screws and custom high-CFM Radxa 'X' fan. Keeps the 5nm Snapdragon 8cx Gen 3 chill even at 3.0 GHz sustained multi-core loads.",
        vsPi: "Pi 5 uses an official silver aluminum heatsink with a smaller radial blower fan."
      },
      {
        id: "hs-eth-pi",
        board: "rpi",
        title: "Single 1GbE Ethernet Port (Pi 5)",
        x: 65,
        y: 72,
        photoRef: "side_by_side_radxa_vs_pi5.jpg",
        detail: "Standard Gigabit Ethernet (1000 Mbps) with PoE+ header support. Excellent for general home projects and basic server duties.",
        vsRadxa: "Radxa offers 2.5x higher bandwidth per port AND gives you two ports for simultaneous WAN/LAN."
      },
      {
        id: "hs-cooler-pi",
        board: "rpi",
        title: "Raspberry Pi 5 Active Cooler",
        x: 80,
        y: 42,
        photoRef: "side_by_side_radxa_vs_pi5.jpg",
        detail: "The official Raspberry Pi 5 Active Cooler clips into mounting holes on the PCB. Controlled by dynamic PWM curve in Pi OS to stay silent under light tasks and spin up during 2.4 GHz bursts.",
        vsRadxa: "Pi 5 runs notably warmer than previous Pi models, making active cooling virtually mandatory for sustained loads."
      },
      {
        id: "hs-gpio-pi",
        board: "rpi",
        title: "Ubiquitous 40-Pin GPIO Header (Pi 5)",
        x: 88,
        y: 50,
        photoRef: "side_by_side_radxa_vs_pi5.jpg",
        detail: "The legendary 40-pin header backed by over a decade of maker documentation, tutorials, and hundreds of standard HAT add-on boards. Driven by the new RP1 southbridge chip.",
        vsRadxa: "Radxa also provides a 40-pin color-coded header with UART, SPI, I2C, but third-party HAT physical fitment varies."
      },
      {
        id: "hs-ram-label-pi",
        board: "rpi",
        title: "Model Identifier Badge (8GB RAM)",
        x: 85,
        y: 68,
        photoRef: "side_by_side_radxa_vs_pi5.jpg",
        detail: "The white square label marked '8' denotes an 8GB LPDDR4X Raspberry Pi 5. Pi 5 is offered in 1GB, 2GB, 4GB, 8GB, and 16GB tiers.",
        vsRadxa: "Dragon Q8B scales all the way up to 32GB 8-channel LPDDR4X RAM for heavy workstation and enterprise AI workloads."
      }
    ],

    undersideM2: [
      {
        id: "hs-m2-dual",
        board: "radxa",
        title: "Dual Native M.2 M-Key NVMe Slots (Radxa Underside)",
        x: 58,
        y: 48,
        photoRef: "radxa_dragon_underside_m2.png",
        detail: "On the back of the Radxa Dragon Q8B are TWO full M.2 M-Key sockets: 1x PCIe 3.0 x4 (up to ~3,500 MB/s) and 1x PCIe 3.0 x2 (up to ~1,800 MB/s). No expansion HATs or ribbon cables needed! Direct NVMe boot out of the box.",
        vsPi: "Pi 5 has NO onboard M.2 slot. It only has a delicate 16-pin FPC ribbon connector on top that requires buying an external $15-25 HAT+ to attach a single NVMe SSD, capped at PCIe 2.0 x1 speeds (~450-800 MB/s)."
      },
      {
        id: "hs-tf-slot",
        board: "radxa",
        title: "MicroSD (TF) High-Speed Slot",
        x: 78,
        y: 60,
        photoRef: "radxa_dragon_underside_m2.png",
        detail: "Standard TF card slot for quick OS flashing or secondary backup storage. Also accompanied by high-speed UFS 3.1 connector options.",
        vsPi: "Pi 5 also features a high-speed MicroSD card slot with SDR104 mode for ~90 MB/s reads."
      }
    ],

    boxBadge: [
      {
        id: "hs-box-dragon",
        board: "radxa",
        title: "Radxa Dragon Q8B - Intelligent Edge Badges",
        x: 72,
        y: 84,
        photoRef: "radxa_dragon_box.png",
        detail: "Official retail packaging highlighting core superpowers: Octa-core CPU, 29+ TOPS NPU, Dual 2.5 GbE, 4K120 Video, and PCIe Gen3.",
        vsPi: "Pi 5 packaging emphasizes the BCM2712 CPU, 2.4GHz clock, and official Raspberry Pi ecosystem branding."
      }
    ]
  },

  // Benchmarks Dataset
  benchmarks: {
    geekbenchSingle: {
      title: "Geekbench 6 Single-Core Performance",
      unit: "Points (Higher is better)",
      rpi5: 785,
      radxaDragon: 1120,
      radxaRock5b: 820,
      rpi4: 280,
      description: "Qualcomm Kryo Prime core @ 3.0GHz delivers ~42% higher single-thread burst speed compared to Pi 5 Cortex-A76 @ 2.4GHz."
    },
    geekbenchMulti: {
      title: "Geekbench 6 Multi-Core Performance",
      unit: "Points (Higher is better)",
      rpi5: 1820,
      radxaDragon: 3450,
      radxaRock5b: 2980,
      rpi4: 790,
      description: "With 8 full cores (4 Prime + 4 Gold) vs 4 cores on Pi 5, the Dragon Q8B roughly doubles parallel compilation and container throughput."
    },
    aiTops: {
      title: "AI Inference Accelerator Power",
      unit: "TOPS (Trillion Operations / Sec - INT8)",
      rpi5: 0, // 26 with Hailo HAT+
      rpi5WithHat: 26,
      radxaDragon: 29.5,
      radxaRock5b: 6,
      description: "Radxa Dragon Q8B has 29+ TOPS built-in with zero accessories. Pi 5 requires a $70+ AI HAT+ add-on to reach 26 TOPS."
    },
    nvmeRead: {
      title: "NVMe Sequential Read Speed",
      unit: "MB/s (Higher is better)",
      rpi5: 450, // PCIe 2.0 x1
      rpi5Gen3Tweaked: 880, // Forced PCIe 3.0 x1
      radxaDragon: 3480, // PCIe 3.0 x4 native
      radxaRock5b: 3350, // PCIe 3.0 x4 native
      description: "Radxa's native PCIe 3.0 x4 slot delivers nearly 4x to 8x higher sequential bandwidth than Pi 5's single-lane ribbon connection."
    },
    ethernetBandwidth: {
      title: "Total Network Ethernet Bandwidth",
      unit: "Gbps (Combined Line Rate)",
      rpi5: 1.0,
      radxaDragon: 5.0, // 2x 2.5 Gbps = 5 Gbps
      radxaRock5b: 2.5,
      description: "Radxa Dragon Q8B's Dual 2.5GbE provides 5.0 Gbps aggregate throughput, perfect for full-duplex firewall routing without bottle-necking."
    },
    ramBandwidth: {
      title: "Memory Bus Width & Bandwidth",
      unit: "GB/s theoretical bandwidth",
      rpi5: 17.0, // 32-bit LPDDR4X-4267
      radxaDragon: 68.2, // 128-bit 8-channel LPDDR4X-4266
      radxaRock5b: 34.1, // 64-bit LPDDR4X
      description: "Dragon Q8B features a monster 128-bit 8-channel memory architecture (4x wider than Pi 5), drastically boosting LLM matrix operations."
    },
    powerIdleLoad: {
      title: "Power Consumption (Idle / Full Load)",
      unit: "Watts (Lower is better)",
      rpi5: { idle: 2.8, load: 12.5 },
      radxaDragon: { idle: 4.2, load: 24.0 },
      radxaRock5b: { idle: 3.5, load: 18.0 },
      description: "Pi 5 has lower idle draw (2.8W vs 4.2W), but Dragon Q8B has much higher peak performance density per watt thanks to its 5nm node."
    }
  },

  // Interactive Quiz Questions
  quizQuestions: [
    {
      id: "q1",
      question: "What is the primary mission for your single board computer?",
      options: [
        { text: "On-device AI, Local LLMs (Ollama) & Computer Vision", scoreRpi: 20, scoreRadxa: 95, reason: "Radxa Dragon Q8B includes 29+ TOPS NPU and 128-bit RAM bandwidth built-in." },
        { text: "Home Lab, High-speed NAS & 2.5G Network Router/Firewall", scoreRpi: 30, scoreRadxa: 95, reason: "Radxa's Dual 2.5GbE and Dual native M.2 NVMe slots are tailor-made for routing & RAID." },
        { text: "Learning Linux, School STEM projects & Hardware Hacking", scoreRpi: 100, scoreRadxa: 30, reason: "Raspberry Pi has the undisputed best beginner documentation, forums, and educational guides." },
        { text: "Home Assistant, Smart Home Hub & Low-Power Background Server", scoreRpi: 90, scoreRadxa: 60, reason: "Pi 5 and Pi 4 offer ultra-low idle power and officially supported HAOS images." },
        { text: "4K120 / 8K Retro Gaming Emulation & Living Room Media Center", scoreRpi: 55, scoreRadxa: 90, reason: "Radxa brings Adreno/Mali GPU horsepower, Vulkan 1.3, and HDMI 2.1 4K120/8K output." }
      ]
    },
    {
      id: "q2",
      question: "What is your storage & drive configuration preference?",
      options: [
        { text: "I want dual ultra-fast NVMe SSDs in RAID without buying extra HATs", scoreRpi: 10, scoreRadxa: 100, reason: "Radxa Dragon Q8B has dual M.2 M-Key slots built right onto the board underside." },
        { text: "A single NVMe SSD with an adapter HAT or simple MicroSD is fine", scoreRpi: 85, scoreRadxa: 60, reason: "Pi 5 handles single NVMe well with an official or third-party HAT+." },
        { text: "Just a standard MicroSD card is all I need", scoreRpi: 80, scoreRadxa: 70, reason: "Both boards have fast MicroSD slots." }
      ]
    },
    {
      id: "q3",
      question: "What are your networking & bandwidth requirements?",
      options: [
        { text: "I need Dual 2.5GbE multi-gigabit Ethernet ports on-board", scoreRpi: 10, scoreRadxa: 100, reason: "Dragon Q8B is one of the only sub-100mm SBCs with dual 2.5GbE ports." },
        { text: "Standard 1GbE Gigabit Ethernet or Wi-Fi is plenty for my needs", scoreRpi: 90, scoreRadxa: 70, reason: "Pi 5's gigabit Ethernet port performs solidly at ~940 Mbps line rate." }
      ]
    },
    {
      id: "q4",
      question: "How important is community support, pre-built tutorials, and HAT accessories?",
      options: [
        { text: "Mission critical: I want to google any problem and find 100 answers", scoreRpi: 100, scoreRadxa: 35, reason: "The Raspberry Pi community has millions of active members, tutorials, and ready-made images." },
        { text: "I am comfortable with Armbian, Linux CLI, and troubleshooting kernel configs", scoreRpi: 50, scoreRadxa: 95, reason: "You will easily harness Radxa's extreme hardware specs without getting stuck." }
      ]
    },
    {
      id: "q5",
      question: "What is your budget ceiling for the complete setup?",
      options: [
        { text: "Under $80 (Barebones entry level)", scoreRpi: 90, scoreRadxa: 30, reason: "Pi 5 2GB/4GB or Pi 4 fits under this budget nicely." },
        { text: "$100 - $180 (Mid-range high performance)", scoreRpi: 80, scoreRadxa: 80, reason: "Pi 5 8GB with cooler or Radxa Rock 5B / Dragon Q8B entry variants fit here." },
        { text: "$200+ (Extreme performance edge workstation / AI powerhouse)", scoreRpi: 50, scoreRadxa: 100, reason: "Radxa Dragon Q8B 16GB/32GB delivers workstation-level Qualcomm octa-core value." }
      ]
    }
  ],

  // TCO Calculator Data
  tcoItems: {
    rpi: {
      boardOptions: [
        { name: "Raspberry Pi 5 (2GB RAM)", price: 65 },
        { name: "Raspberry Pi 5 (4GB RAM)", price: 110 },
        { name: "Raspberry Pi 5 (8GB RAM - User Photo)", price: 175 },
        { name: "Raspberry Pi 5 (16GB RAM)", price: 305 }
      ],
      addons: [
        { id: "cooler", name: "Official Active Cooler (Heatsink + PWM Fan)", price: 7, default: true },
        { id: "psu", name: "Official 27W USB-C Power Supply (5V/5A PD)", price: 15, default: true },
        { id: "nvmeHat", name: "Official M.2 HAT+ (Adds 1x PCIe 2.0 NVMe slot)", price: 15, default: false },
        { id: "aiHat", name: "Official AI HAT+ with Hailo-8L NPU (26 TOPS)", price: 75, default: false },
        { id: "case", name: "Aluminum Flirc or Acrylic Armor Case", price: 18, default: false },
        { id: "microHdmi", name: "Micro-HDMI to Standard HDMI Cable", price: 8, default: true }
      ]
    },
    radxa: {
      boardOptions: [
        { name: "Radxa Dragon Q8B (8GB RAM + 29+ TOPS NPU)", price: 185 },
        { name: "Radxa Dragon Q8B (16GB RAM + 29+ TOPS NPU)", price: 235 },
        { name: "Radxa Dragon Q8B (32GB RAM + 29+ TOPS NPU)", price: 310 },
        { name: "Radxa Rock 5B+ (16GB RAM + 6 TOPS NPU)", price: 165 }
      ],
      addons: [
        { id: "cooler", name: "Custom Extruded Cooler with 'X' Fan", price: 12, default: true },
        { id: "psu", name: "Standard 65W USB-C PD 3.0 Power Brick", price: 22, default: true },
        { id: "nvmeHat", name: "Dual NVMe Slots (Built-in on PCB, $0 Extra)", price: 0, default: true, disabled: true },
        { id: "aiHat", name: "29+ TOPS Hexagon NPU (Built-in on SoC, $0 Extra)", price: 0, default: true, disabled: true },
        { id: "case", name: "Custom Aluminum Protective Shell", price: 20, default: false },
        { id: "hdmi", name: "Standard HDMI 2.1 Cable (Standard Port)", price: 7, default: true }
      ]
    }
  }
};
