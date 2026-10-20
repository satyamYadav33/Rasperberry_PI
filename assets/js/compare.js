// Comparison Page Script (compare.html)
document.addEventListener('DOMContentLoaded', () => {
  initLucide();
  setupHotspotInspector();
  setupSpecMatrix();
  initBenchmarkCharts();
  setupDecisionQuiz();
  setupTcoCalculator();
});

function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// -------------------------------------------------------------
// 1. Photo Hotspot Inspector
// -------------------------------------------------------------
const photoGalleries = {
  'side-by-side': {
    title: "Radxa Dragon Q8B vs Raspberry Pi 5 - Side-by-Side Faceoff",
    image: "assets/images/side_by_side_radxa_vs_pi5.jpg",
    hotspots: [
      {
        id: "hs-ports",
        title: "Dual 2.5GbE Ethernet vs Single 1GbE",
        x: 48,
        y: 68,
        tag: "Radxa Advantage",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        summary: "Notice the two gold metal-shielded RJ45 ports on the Radxa Dragon Q8B. Both deliver full 2.5 Gbps line rate independently.",
        piComparison: "Raspberry Pi 5 (right) has only a single 1GbE port. To run a router (WAN+LAN), you would need to add an unstable USB ethernet dongle.",
        winner: "Radxa (2.5x speed per port + Dual independent interfaces)"
      },
      {
        id: "hs-radxa-cooler",
        title: "Active Aluminum Heatsink & High-CFM Fan",
        x: 29,
        y: 35,
        tag: "Thermal Solution",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        summary: "Massive custom black finned heatsink with green 'X' fan secured by spring-loaded screws directly over the 5nm Qualcomm Snapdragon 8cx Gen 3 SoC.",
        piComparison: "Pi 5 (right) features the official silver active cooler with a small blower fan. Both boards require active cooling under high compute loads.",
        winner: "Tie / Radxa has larger heatsink surface area"
      },
      {
        id: "hs-pi5-eth",
        title: "Raspberry Pi 5 Single 1GbE Port",
        x: 65,
        y: 74,
        tag: "Pi Standard I/O",
        badgeColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
        summary: "Standard 1000 Mbps gigabit Ethernet controller connected directly to the Broadcom SoC. Includes PoE+ HAT pin headers.",
        piComparison: "Excellent for home servers and basic streaming, but maxes out at ~115 MB/s transfer speeds.",
        winner: "Sufficient for basic use cases"
      },
      {
        id: "hs-pi5-ram",
        title: "Pi 5 8GB RAM Marking",
        x: 85,
        y: 69,
        tag: "Memory Configuration",
        badgeColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
        summary: "Notice the white square sticker marked '8' indicating this is the 8GB LPDDR4X variant of the Raspberry Pi 5.",
        piComparison: "Pi 5 scales up to 16GB ($305). Radxa Dragon Q8B scales up to 32GB RAM on an 8-channel 128-bit memory bus for heavy AI.",
        winner: "Radxa offers higher max RAM (32GB) and 4x wider memory bus (128-bit vs 32-bit)"
      },
      {
        id: "hs-pi5-gpio",
        title: "Classic 40-Pin GPIO Header (Pi 5)",
        x: 88,
        y: 48,
        tag: "Makers & Sensors",
        badgeColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
        summary: "Standard 40-pin header driven by the RP1 custom I/O controller chip. Backed by thousands of HATs and endless maker code libraries.",
        piComparison: "Radxa also has a 40-pin header, but Raspberry Pi's software ecosystem (gpiozero, wiringpi, sensor libraries) is vastly more turnkey.",
        winner: "Raspberry Pi (Undisputed maker champion)"
      }
    ]
  },
  'underside-m2': {
    title: "Radxa Dragon Q8B Underside - Native Dual M.2 M-Key NVMe Slots",
    image: "assets/images/radxa_dragon_underside_m2.png",
    hotspots: [
      {
        id: "hs-m2-slot1",
        title: "Primary M.2 M-Key NVMe Slot (PCIe 3.0 x4)",
        x: 44,
        y: 35,
        tag: "Blazing Storage",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        summary: "Full PCIe 3.0 x4 M-Key socket supporting speeds up to ~3,500 MB/s! Fits full-length high-capacity NVMe drives without needing any adapter board or HAT.",
        piComparison: "Pi 5 has NO onboard M.2 slot! It requires purchasing a $15-$25 HAT+ and ribbon cable, and is limited to PCIe 2.0 x1 (~450 MB/s).",
        winner: "Radxa (Almost 8x faster sequential bandwidth, zero extra HAT cost)"
      },
      {
        id: "hs-m2-slot2",
        title: "Secondary M.2 M-Key NVMe Slot (PCIe 3.0 x2)",
        x: 60,
        y: 50,
        tag: "RAID / Dual Storage",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        summary: "A second native M.2 M-Key slot running at PCIe 3.0 x2 (~1,800 MB/s). Allows building a true mirrored ZFS or RAID 1 storage pool inside a compact mini-chassis.",
        piComparison: "Impossible on Raspberry Pi 5 without complex custom external PCIe switches.",
        winner: "Radxa (Unique capability in sub-100mm SBC market)"
      },
      {
        id: "hs-tf-underside",
        title: "MicroSD / TF Card Slot",
        x: 77,
        y: 62,
        tag: "Boot & Backup",
        badgeColor: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
        summary: "High-speed TF card slot for quick OS image installation, firmware recovery, and portable storage.",
        piComparison: "Both boards feature fast MicroSD slots for easy flashing.",
        winner: "Tie"
      }
    ]
  },
  'ports-detail': {
    title: "Radxa Dragon Q8B Port Cluster & Display I/O",
    image: "assets/images/radxa_dragon_ports.png",
    hotspots: [
      {
        id: "hs-dual-rj45",
        title: "Dual 2.5GbE RJ45 Ports with LED Indicators",
        x: 64,
        y: 55,
        tag: "Multi-Gigabit LAN",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        summary: "Notice the active link/activity LEDs on the plugged Ethernet cable. Two 2.5GbE ports provide 5.0 Gbps total throughput.",
        piComparison: "Pi 5 is stuck at 1GbE. For high-speed NAS or multi-gig internet, Radxa is the clear choice.",
        winner: "Radxa"
      },
      {
        id: "hs-usb3-ports",
        title: "USB 3.2 Gen 2 (10 Gbps) & USB 2.0 Ports",
        x: 39,
        y: 43,
        tag: "High-Speed Peripherals",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        summary: "Dual blue USB 3.2 Gen 2 ports delivering up to 10 Gbps transfer rates, plus dual USB 2.0 ports for mouse/keyboard.",
        piComparison: "Pi 5 has USB 3.0 (5 Gbps) ports driven by the RP1 chip.",
        winner: "Radxa (10 Gbps vs 5 Gbps)"
      },
      {
        id: "hs-hdmi-full",
        title: "Full-Size HDMI 2.1 Port (Up to 4K@120Hz)",
        x: 10,
        y: 45,
        tag: "Modern Display",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        summary: "Full-size HDMI 2.1 port capable of delivering 4K at a buttery-smooth 120Hz. Plus 2x USB-C ports with DisplayPort 1.4 Alt-Mode for triple 4K120 displays!",
        piComparison: "Pi 5 has dual Micro-HDMI ports limited to 4K@60Hz. Micro-HDMI cables are notorious for fragility and need special adapters.",
        winner: "Radxa (Standard HDMI port + 4K120 refresh rate + DP Alt Mode)"
      }
    ]
  },
  'box-specs': {
    title: "Radxa Dragon Q8B Retail Packaging - Flagship Specs",
    image: "assets/images/radxa_dragon_box.png",
    hotspots: [
      {
        id: "hs-box-badges",
        title: "Intelligent Edge Capabilities",
        x: 74,
        y: 83,
        tag: "Specification Badges",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        summary: "Clearly stamped on the packaging: Octa-core CPU, 29+ TOPS NPU, Dual 2.5 GbE, 4K120 Display, and PCIe Gen3.",
        piComparison: "Pi 5 focuses on being an accessible education and maker platform.",
        winner: "Radxa leads in on-paper silicon performance"
      }
    ]
  },
  'pi-pricing': {
    title: "Raspberry Pi 5 Official Retail Pricing Spectrum",
    image: "assets/images/raspberry_pi_5_pricing.png",
    hotspots: [
      {
        id: "hs-pi5-entry",
        title: "Pi 5 1GB & 2GB Tiers ($45 - $65)",
        x: 35,
        y: 38,
        tag: "Budget Tier",
        badgeColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
        summary: "Entry-level options for basic servers, Pi-hole, and lightweight scripting. Highly affordable starting point.",
        piComparison: "Radxa boards start with more RAM and features, but Pi has lower absolute entry price.",
        winner: "Raspberry Pi (Lower barrier to entry)"
      },
      {
        id: "hs-pi5-flagship",
        title: "Pi 5 8GB & 16GB Tiers ($175 - $305)",
        x: 75,
        y: 42,
        tag: "High-End Tier",
        badgeColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
        summary: "As RAM increases to 8GB ($175) and 16GB ($305), the cost approaches workstation levels. Add an AI HAT+ ($75) and NVMe HAT ($15) and total cost exceeds $300.",
        piComparison: "At the $185-$300 range, Radxa Dragon Q8B offers an octa-core 5nm CPU, 29+ TOPS NPU, Dual 2.5G LAN, and Dual NVMe included with zero HAT costs.",
        winner: "Radxa offers drastically better value per dollar at higher price tiers"
      }
    ]
  }
};

function setupHotspotInspector() {
  const tabsContainer = document.getElementById('photo-tabs');
  const photoContainer = document.getElementById('photo-viewport');
  const detailsContainer = document.getElementById('hotspot-details-card');

  if (!tabsContainer || !photoContainer || !detailsContainer) return;

  const galleryKeys = Object.keys(photoGalleries);

  // Render Tabs
  tabsContainer.innerHTML = galleryKeys.map((key, idx) => {
    const item = photoGalleries[key];
    const shortLabel = item.title.split('-')[0].trim();
    return `
      <button onclick="switchPhotoView('${key}')" data-photo-tab="${key}" class="px-4 py-2 text-xs md:text-sm font-medium rounded-xl transition flex items-center gap-2 whitespace-nowrap ${idx === 0 ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30' : 'bg-gray-800/80 text-gray-400 hover:bg-gray-800 hover:text-gray-200'}">
        <i data-lucide="image" class="w-4 h-4"></i>
        <span>${shortLabel}</span>
      </button>
    `;
  }).join('');

  renderActivePhotoView(galleryKeys[0]);
  initLucide();
}

window.switchPhotoView = function(key) {
  const tabs = document.querySelectorAll('[data-photo-tab]');
  tabs.forEach(t => {
    if (t.getAttribute('data-photo-tab') === key) {
      t.classList.add('bg-emerald-600', 'text-white', 'shadow-lg', 'shadow-emerald-600/30');
      t.classList.remove('bg-gray-800/80', 'text-gray-400');
    } else {
      t.classList.remove('bg-emerald-600', 'text-white', 'shadow-lg', 'shadow-emerald-600/30');
      t.classList.add('bg-gray-800/80', 'text-gray-400');
    }
  });

  renderActivePhotoView(key);
};

function renderActivePhotoView(key) {
  const photoContainer = document.getElementById('photo-viewport');
  const gallery = photoGalleries[key];
  if (!photoContainer || !gallery) return;

  photoContainer.innerHTML = `
    <div class="relative w-full rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-black">
      <img src="${gallery.image}" alt="${gallery.title}" class="w-full h-auto object-cover max-h-[550px] mx-auto select-none" />
      
      <!-- Hotspot Pins Overlay -->
      ${gallery.hotspots.map((hs, index) => {
        const pulseClass = hs.tag.toLowerCase().includes('pi') ? 'hotspot-pulse-rpi' : 'hotspot-pulse-radxa';
        return `
          <button 
            onclick="selectHotspot('${key}', '${hs.id}')"
            style="left: ${hs.x}%; top: ${hs.y}%;"
            class="hotspot-point ${pulseClass} border-2 border-white shadow-lg text-white font-mono text-xs font-bold"
            title="${hs.title}">
            ${index + 1}
          </button>
        `;
      }).join('')}
    </div>
    <div class="text-center text-xs text-gray-400 mt-2 flex items-center justify-center gap-1.5">
      <i data-lucide="info" class="w-3.5 h-3.5 text-emerald-400"></i> Click any glowing number pin on the photo to inspect architectural differences
    </div>
  `;

  // Select first hotspot by default
  if (gallery.hotspots.length > 0) {
    selectHotspot(key, gallery.hotspots[0].id);
  }

  initLucide();
}

window.selectHotspot = function(galleryKey, hotspotId) {
  const gallery = photoGalleries[galleryKey];
  if (!gallery) return;
  const hs = gallery.hotspots.find(h => h.id === hotspotId);
  if (!hs) return;

  const card = document.getElementById('hotspot-details-card');
  if (!card) return;

  card.innerHTML = `
    <div class="glass-panel rounded-2xl p-6 border border-gray-800 animate-fadeIn">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full ${hs.badgeColor} border">${hs.tag}</span>
        <span class="text-xs text-gray-400 font-mono">Pin #${gallery.hotspots.indexOf(hs) + 1}</span>
      </div>

      <h4 class="text-xl font-bold text-white mb-2">${hs.title}</h4>
      <p class="text-xs md:text-sm text-gray-300 leading-relaxed mb-4">${hs.summary}</p>

      <div class="bg-gray-900/80 rounded-xl p-4 border border-gray-800 space-y-2 mb-4">
        <div class="text-xs">
          <strong class="text-pink-400 block mb-0.5 flex items-center gap-1.5">
            <i data-lucide="git-commit" class="w-3.5 h-3.5"></i> Raspberry Pi Equivalent:
          </strong>
          <span class="text-gray-300">${hs.piComparison}</span>
        </div>
      </div>

      <div class="p-3 bg-emerald-950/30 rounded-xl border border-emerald-900/50 flex items-start gap-2 text-xs">
        <i data-lucide="award" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
        <div>
          <strong class="text-emerald-300 block mb-0.5">Architectural Verdict:</strong>
          <span class="text-gray-200">${hs.winner}</span>
        </div>
      </div>
    </div>
  `;

  initLucide();
};

// -------------------------------------------------------------
// 2. Head-to-Head Specification Matrix
// -------------------------------------------------------------
function setupSpecMatrix() {
  const matrixTable = document.getElementById('spec-matrix-body');
  const pairSelect = document.getElementById('compare-pair-select');
  if (!matrixTable) return;

  const pairs = {
    'pi5-vs-dragon': {
      boardA: window.SBC_DATA.models.find(m => m.id === 'rpi-5'),
      boardB: window.SBC_DATA.models.find(m => m.id === 'radxa-dragon-q8b')
    },
    'pi5-vs-rock5b': {
      boardA: window.SBC_DATA.models.find(m => m.id === 'rpi-5'),
      boardB: window.SBC_DATA.models.find(m => m.id === 'radxa-rock-5b-plus')
    },
    'piZero-vs-radxaZero': {
      boardA: window.SBC_DATA.models.find(m => m.id === 'rpi-zero-2w'),
      boardB: window.SBC_DATA.models.find(m => m.id === 'radxa-zero-3w')
    }
  };

  function renderMatrix(pairKey) {
    const pair = pairs[pairKey];
    if (!pair) return;

    const bA = pair.boardA;
    const bB = pair.boardB;

    // Update Header labels
    const labelA = document.getElementById('matrix-label-a');
    const labelB = document.getElementById('matrix-label-b');
    if (labelA) labelA.textContent = bA.name;
    if (labelB) labelB.textContent = bB.name;

    const specs = [
      {
        category: "Silicon & Node",
        feature: "System on Chip (SoC)",
        valA: bA.soc,
        valB: bB.soc,
        winner: "B",
        reason: "Radxa leverages modern 5nm / 8nm processes with higher efficiency and core counts."
      },
      {
        category: "CPU Cores",
        feature: "Core Configuration & Clocks",
        valA: bA.cpu,
        valB: bB.cpu,
        winner: "B",
        reason: "8 cores (4 Prime + 4 Gold) vs 4 cores yields up to 90% higher multi-thread throughput."
      },
      {
        category: "AI & NPU",
        feature: "Onboard AI NPU Accelerator",
        valA: bA.npu,
        valB: bB.npu,
        winner: "B",
        reason: "Radxa includes dedicated NPU (up to 29+ TOPS) onboard. Pi 5 requires a $70+ external HAT."
      },
      {
        category: "Memory",
        feature: "RAM Capacity & Bus Width",
        valA: `${bA.ramOptions.join(', ')} (${bA.ramType})`,
        valB: `${bB.ramOptions.join(', ')} (${bB.ramType})`,
        winner: "B",
        reason: "Radxa reaches 32GB RAM on a 128-bit 8-channel bus (~68 GB/s bandwidth vs ~17 GB/s on Pi 5)."
      },
      {
        category: "Storage",
        feature: "NVMe & SSD Expansion",
        valA: bA.storage,
        valB: bB.storage,
        winner: "B",
        reason: "Dual native M.2 M-Key slots PCIe 3.0 x4/x2 (~3500MB/s) vs 1x PCIe 2.0 x1 via delicate ribbon cable (~450MB/s)."
      },
      {
        category: "Networking",
        feature: "Wired Ethernet Ports",
        valA: bA.network,
        valB: bB.network,
        winner: "B",
        reason: "Dual 2.5GbE ports allow true hardware router, firewall, and dual-network configurations."
      },
      {
        category: "Displays",
        feature: "Video Output & Refresh Rates",
        valA: bA.videoOutput,
        valB: bB.videoOutput,
        winner: "B",
        reason: "Full HDMI 2.1 (4K120 or 8K) + Dual USB-C DP Alt Mode vs Dual Micro-HDMI 4K60."
      },
      {
        category: "Software",
        feature: "Operating Systems & Ecosystem",
        valA: bA.osSupport.join(', '),
        valB: bB.osSupport.join(', '),
        winner: "A",
        reason: "Raspberry Pi OS, beginner guides, forums, and 10+ years of maker tutorials remain unmatched globally."
      },
      {
        category: "GPIO",
        feature: "Header & Maker Accessories",
        valA: bA.gpio,
        valB: bB.gpio,
        winner: "A",
        reason: "Pi standard HAT physical alignment, EEPROM auto-configuration, and direct python libraries."
      },
      {
        category: "Price Point",
        feature: "Retail Price Spectrum",
        valA: bA.priceRange,
        valB: bB.priceRange,
        winner: "Depends",
        reason: "Pi is cheaper for basic 1GB/2GB setups ($45); Radxa offers superior value per dollar for demanding 16GB+ AI/NAS builds."
      }
    ];

    matrixTable.innerHTML = specs.map(row => {
      const winA = row.winner === 'A';
      const winB = row.winner === 'B';
      return `
        <tr class="border-b border-gray-800/80 hover:bg-gray-800/30 transition text-xs">
          <td class="py-3 px-4 text-gray-400 font-medium whitespace-nowrap">
            <span class="block text-[10px] uppercase tracking-wider text-gray-500">${row.category}</span>
            <strong class="text-gray-200">${row.feature}</strong>
          </td>
          <td class="py-3 px-4 ${winA ? 'bg-pink-950/10' : ''}">
            <div class="flex items-start justify-between gap-2">
              <span class="text-gray-200">${row.valA}</span>
              ${winA ? `<span class="shrink-0 px-2 py-0.5 rounded text-[10px] font-bold bg-pink-500/20 text-pink-400 border border-pink-500/30">Winner</span>` : ''}
            </div>
          </td>
          <td class="py-3 px-4 ${winB ? 'bg-emerald-950/10' : ''}">
            <div class="flex items-start justify-between gap-2">
              <span class="text-gray-200">${row.valB}</span>
              ${winB ? `<span class="shrink-0 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Winner</span>` : ''}
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  if (pairSelect) {
    pairSelect.addEventListener('change', (e) => {
      renderMatrix(e.target.value);
    });
  }

  renderMatrix('pi5-vs-dragon');
}

// -------------------------------------------------------------
// 3. Interactive Benchmark Arena (Chart.js)
// -------------------------------------------------------------
let charts = {};

function initBenchmarkCharts() {
  if (typeof Chart === 'undefined') return;

  const bm = window.SBC_DATA.benchmarks;

  // Chart 1: Geekbench Single & Multi-Core
  const ctxCpu = document.getElementById('chart-cpu-perf');
  if (ctxCpu) {
    charts.cpu = new Chart(ctxCpu, {
      type: 'bar',
      data: {
        labels: ['Raspberry Pi 4B', 'Raspberry Pi 5', 'Radxa Rock 5B+', 'Radxa Dragon Q8B'],
        datasets: [
          {
            label: 'Geekbench 6 Single-Core',
            data: [bm.geekbenchSingle.rpi4, bm.geekbenchSingle.rpi5, bm.geekbenchSingle.radxaRock5b, bm.geekbenchSingle.radxaDragon],
            backgroundColor: '#3B82F6',
            borderRadius: 6
          },
          {
            label: 'Geekbench 6 Multi-Core',
            data: [bm.geekbenchMulti.rpi4, bm.geekbenchMulti.rpi5, bm.geekbenchMulti.radxaRock5b, bm.geekbenchMulti.radxaDragon],
            backgroundColor: '#10B981',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#D1D5DB', font: { size: 11 } } },
          tooltip: { mode: 'index', intersect: false }
        },
        scales: {
          x: { ticks: { color: '#9CA3AF' }, grid: { color: '#1F2937' } },
          y: { ticks: { color: '#9CA3AF' }, grid: { color: '#1F2937' } }
        }
      }
    });
  }

  // Chart 2: AI NPU TOPS & NVMe Storage Speed
  const ctxStorage = document.getElementById('chart-storage-ai');
  if (ctxStorage) {
    charts.storage = new Chart(ctxStorage, {
      type: 'bar',
      data: {
        labels: ['Pi 5 (Stock PCIe 2.0)', 'Pi 5 + AI HAT+ / PCIe 3.0', 'Radxa Rock 5B (RK3588)', 'Radxa Dragon Q8B (Snapdragon)'],
        datasets: [
          {
            label: 'NVMe Read Speed (MB/s)',
            data: [bm.nvmeRead.rpi5, bm.nvmeRead.rpi5Gen3Tweaked, bm.nvmeRead.radxaRock5b, bm.nvmeRead.radxaDragon],
            backgroundColor: '#8B5CF6',
            borderRadius: 6,
            yAxisID: 'y'
          },
          {
            label: 'AI Compute (TOPS)',
            data: [0, bm.aiTops.rpi5WithHat, bm.aiTops.radxaRock5b, bm.aiTops.radxaDragon],
            backgroundColor: '#00E676',
            borderRadius: 6,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#D1D5DB', font: { size: 11 } } }
        },
        scales: {
          x: { ticks: { color: '#9CA3AF' }, grid: { color: '#1F2937' } },
          y: {
            type: 'linear',
            position: 'left',
            ticks: { color: '#8B5CF6' },
            grid: { color: '#1F2937' },
            title: { display: true, text: 'NVMe MB/s', color: '#8B5CF6' }
          },
          y1: {
            type: 'linear',
            position: 'right',
            ticks: { color: '#00E676' },
            grid: { drawOnChartArea: false },
            title: { display: true, text: 'AI TOPS', color: '#00E676' }
          }
        }
      }
    });
  }

  // Chart 3: Network Throughput Comparison
  const ctxNet = document.getElementById('chart-network-perf');
  if (ctxNet) {
    charts.net = new Chart(ctxNet, {
      type: 'doughnut',
      data: {
        labels: ['Pi 5 (1x 1GbE - 1 Gbps)', 'Radxa Dragon Q8B (2x 2.5GbE - 5 Gbps Total)'],
        datasets: [{
          data: [1.0, 5.0],
          backgroundColor: ['#E30B5C', '#00E676'],
          borderColor: '#111827',
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { color: '#D1D5DB' } }
        }
      }
    });
  }
}

// -------------------------------------------------------------
// 4. Interactive "Which SBC Should You Buy?" Quiz
// -------------------------------------------------------------
let userQuizAnswers = {};

function setupDecisionQuiz() {
  const quizContainer = document.getElementById('quiz-questions-list');
  if (!quizContainer) return;

  const questions = window.SBC_DATA.quizQuestions;

  quizContainer.innerHTML = questions.map((q, qIndex) => `
    <div class="bg-gray-900/60 p-5 rounded-2xl border border-gray-800 mb-6">
      <h5 class="text-sm font-semibold text-white mb-3 flex items-center gap-2">
        <span class="w-6 h-6 rounded-full bg-indigo-600/30 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-xs font-mono font-bold">${qIndex + 1}</span>
        ${q.question}
      </h5>
      <div class="space-y-2">
        ${q.options.map((opt, optIndex) => `
          <label class="flex items-start gap-3 p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-gray-700 cursor-pointer transition text-xs">
            <input type="radio" name="quiz_${q.id}" value="${optIndex}" onchange="recordQuizAnswer('${q.id}', ${optIndex})" class="mt-0.5 text-emerald-500 focus:ring-emerald-500" />
            <div>
              <span class="text-gray-200 font-medium block">${opt.text}</span>
              <span class="text-gray-400 text-[11px] mt-0.5 block">${opt.reason}</span>
            </div>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');

  initLucide();
}

window.recordQuizAnswer = function(qId, optIndex) {
  userQuizAnswers[qId] = optIndex;
  calculateQuizResult();
};

function calculateQuizResult() {
  const questions = window.SBC_DATA.quizQuestions;
  const answeredCount = Object.keys(userQuizAnswers).length;
  if (answeredCount < questions.length) return; // Wait until all are selected

  let totalRpi = 0;
  let totalRadxa = 0;
  let reasons = [];

  questions.forEach(q => {
    const optIdx = userQuizAnswers[q.id];
    if (optIdx !== undefined) {
      const opt = q.options[optIdx];
      totalRpi += opt.scoreRpi;
      totalRadxa += opt.scoreRadxa;
      reasons.push(opt.reason);
    }
  });

  const sum = totalRpi + totalRadxa;
  const rpiPct = Math.round((totalRpi / sum) * 100);
  const radxaPct = 100 - rpiPct;

  const resultContainer = document.getElementById('quiz-result-box');
  if (!resultContainer) return;

  const isRadxaWinner = radxaPct >= rpiPct;
  const winnerTitle = isRadxaWinner ? "Radxa Dragon Q8B or Rock 5B" : "Raspberry Pi 5 (or Pi 4B)";
  const winnerBadge = isRadxaWinner ? "badge-radxa" : "badge-rpi";
  const winnerBorder = isRadxaWinner ? "border-emerald-500/50" : "border-pink-500/50";

  resultContainer.innerHTML = `
    <div class="glass-panel rounded-2xl p-6 border ${winnerBorder} animate-fadeIn mt-6">
      <div class="flex items-center justify-between mb-4">
        <div>
          <span class="text-xs uppercase font-bold text-gray-400 block mb-1">Tailored Recommendation</span>
          <h4 class="text-2xl font-extrabold text-white flex items-center gap-2">
            ${winnerTitle}
            <span class="text-xs px-2.5 py-0.5 rounded-full ${winnerBadge}">Best Fit (${isRadxaWinner ? radxaPct : rpiPct}%)</span>
          </h4>
        </div>
      </div>

      <!-- Probability Bars -->
      <div class="space-y-2 mb-6">
        <div>
          <div class="flex justify-between text-xs mb-1">
            <span class="text-pink-400 font-semibold">Raspberry Pi Fit:</span>
            <span class="text-gray-300 font-mono">${rpiPct}%</span>
          </div>
          <div class="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div class="bg-pink-500 h-2 rounded-full transition-all duration-700" style="width: ${rpiPct}%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-xs mb-1">
            <span class="text-emerald-400 font-semibold">Radxa Hardware Fit:</span>
            <span class="text-gray-300 font-mono">${radxaPct}%</span>
          </div>
          <div class="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div class="bg-emerald-500 h-2 rounded-full transition-all duration-700" style="width: ${radxaPct}%"></div>
          </div>
        </div>
      </div>

      <!-- Key Factors -->
      <div class="bg-gray-950 p-4 rounded-xl border border-gray-800 text-xs space-y-1.5">
        <strong class="text-white block mb-1">Why this was chosen for your project:</strong>
        ${reasons.slice(0, 3).map(r => `<div class="flex items-start gap-1.5 text-gray-300"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"></i> <span>${r}</span></div>`).join('')}
      </div>
    </div>
  `;

  resultContainer.classList.remove('hidden');
  initLucide();
}

// -------------------------------------------------------------
// 5. Total Cost of Ownership (TCO) Calculator
// -------------------------------------------------------------
function setupTcoCalculator() {
  const container = document.getElementById('tco-calculator-container');
  if (!container) return;

  const tco = window.SBC_DATA.tcoItems;

  let state = {
    rpiBoardIdx: 2, // 8GB model as in user photo ($175)
    rpiAddons: { cooler: true, psu: true, nvmeHat: true, aiHat: false, case: false, microHdmi: true },
    radxaBoardIdx: 1, // 16GB Dragon Q8B ($235)
    radxaAddons: { cooler: true, psu: true, nvmeHat: true, aiHat: true, case: false, hdmi: true }
  };

  function updateTcoView() {
    // Calculate Pi Total
    const rpiBoard = tco.rpi.boardOptions[state.rpiBoardIdx];
    let rpiTotal = rpiBoard.price;
    tco.rpi.addons.forEach(a => {
      if (state.rpiAddons[a.id]) rpiTotal += a.price;
    });

    // Calculate Radxa Total
    const radxaBoard = tco.radxa.boardOptions[state.radxaBoardIdx];
    let radxaTotal = radxaBoard.price;
    tco.radxa.addons.forEach(a => {
      if (state.radxaAddons[a.id]) radxaTotal += a.price;
    });

    container.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Raspberry Pi 5 Configurator -->
        <div class="bg-gray-900/60 rounded-2xl p-6 border border-pink-500/20">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-bold text-white flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-pink-500"></span> Raspberry Pi 5 Complete Setup
            </h4>
            <span class="text-xl font-extrabold text-pink-400 font-mono">$${rpiTotal}</span>
          </div>

          <div class="mb-4">
            <label class="text-xs text-gray-400 block mb-1.5 font-medium">Select Board RAM Tier:</label>
            <select id="tco-rpi-board" class="w-full bg-gray-950 border border-gray-800 text-xs rounded-xl p-2.5 text-white focus:outline-none focus:border-pink-500">
              ${tco.rpi.boardOptions.map((opt, i) => `
                <option value="${i}" ${i === state.rpiBoardIdx ? 'selected' : ''}>${opt.name} - $${opt.price}</option>
              `).join('')}
            </select>
          </div>

          <div class="space-y-2">
            <label class="text-xs text-gray-400 block mb-1 font-medium">Add-on Accessories & Hardware Modules:</label>
            ${tco.rpi.addons.map(addon => `
              <label class="flex items-center justify-between p-2.5 rounded-xl bg-gray-950/80 border border-gray-800/80 hover:border-gray-700 cursor-pointer text-xs">
                <div class="flex items-center gap-2">
                  <input type="checkbox" id="tco-rpi-${addon.id}" ${state.rpiAddons[addon.id] ? 'checked' : ''} class="rounded text-pink-500 focus:ring-pink-500" />
                  <span class="text-gray-200">${addon.name}</span>
                </div>
                <span class="font-mono text-gray-400 font-semibold">+$${addon.price}</span>
              </label>
            `).join('')}
          </div>

          <div class="mt-4 p-3 bg-pink-950/20 rounded-xl border border-pink-900/30 text-xs text-gray-300">
            <i data-lucide="info" class="w-3.5 h-3.5 text-pink-400 inline mr-1"></i>
            Note: Pi 5 requires purchasing an official <strong>M.2 HAT+</strong> ($15) for single NVMe and an <strong>AI HAT+</strong> ($75) for NPU compute.
          </div>
        </div>

        <!-- Radxa Dragon Q8B Configurator -->
        <div class="bg-gray-900/60 rounded-2xl p-6 border border-emerald-500/20">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-lg font-bold text-white flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-emerald-500"></span> Radxa Dragon Q8B Complete Setup
            </h4>
            <span class="text-xl font-extrabold text-emerald-400 font-mono">$${radxaTotal}</span>
          </div>

          <div class="mb-4">
            <label class="text-xs text-gray-400 block mb-1.5 font-medium">Select Board Spec Tier:</label>
            <select id="tco-radxa-board" class="w-full bg-gray-950 border border-gray-800 text-xs rounded-xl p-2.5 text-white focus:outline-none focus:border-emerald-500">
              ${tco.radxa.boardOptions.map((opt, i) => `
                <option value="${i}" ${i === state.radxaBoardIdx ? 'selected' : ''}>${opt.name} - $${opt.price}</option>
              `).join('')}
            </select>
          </div>

          <div class="space-y-2">
            <label class="text-xs text-gray-400 block mb-1 font-medium">Add-on Accessories & Built-in Features:</label>
            ${tco.radxa.addons.map(addon => `
              <label class="flex items-center justify-between p-2.5 rounded-xl bg-gray-950/80 border border-gray-800/80 hover:border-gray-700 cursor-pointer text-xs">
                <div class="flex items-center gap-2">
                  <input type="checkbox" id="tco-radxa-${addon.id}" ${state.radxaAddons[addon.id] ? 'checked' : ''} ${addon.disabled ? 'disabled' : ''} class="rounded text-emerald-500 focus:ring-emerald-500" />
                  <span class="text-gray-200">${addon.name}</span>
                </div>
                <span class="font-mono text-emerald-400 font-semibold">${addon.price === 0 ? 'FREE (Built-in)' : '+$' + addon.price}</span>
              </label>
            `).join('')}
          </div>

          <div class="mt-4 p-3 bg-emerald-950/20 rounded-xl border border-emerald-900/30 text-xs text-gray-300">
            <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400 inline mr-1"></i>
            <strong>Zero HAT Tax:</strong> Dual NVMe slots (PCIe 3.0 x4 & x2) and the 29+ TOPS NPU are already soldered directly to the motherboard!
          </div>
        </div>
      </div>
    `;

    initLucide();

    // Attach listeners
    const rpiSelect = document.getElementById('tco-rpi-board');
    if (rpiSelect) {
      rpiSelect.addEventListener('change', (e) => {
        state.rpiBoardIdx = parseInt(e.target.value);
        updateTcoView();
      });
    }

    tco.rpi.addons.forEach(a => {
      const el = document.getElementById(`tco-rpi-${a.id}`);
      if (el) {
        el.addEventListener('change', (e) => {
          state.rpiAddons[a.id] = e.target.checked;
          updateTcoView();
        });
      }
    });

    const radxaSelect = document.getElementById('tco-radxa-board');
    if (radxaSelect) {
      radxaSelect.addEventListener('change', (e) => {
        state.radxaBoardIdx = parseInt(e.target.value);
        updateTcoView();
      });
    }

    tco.radxa.addons.forEach(a => {
      const el = document.getElementById(`tco-radxa-${a.id}`);
      if (el && !a.disabled) {
        el.addEventListener('change', (e) => {
          state.radxaAddons[a.id] = e.target.checked;
          updateTcoView();
        });
      }
    });
  }

  updateTcoView();
}
