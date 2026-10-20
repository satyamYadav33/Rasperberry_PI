// Main JavaScript for SBC Hub Usage Showcase (index.html)
document.addEventListener('DOMContentLoaded', () => {
  initLucide();
  renderModels();
  setupModelFilters();
  setupUseCases();
  setupTerminalSimulator();
});

function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render Models Grid
function renderModels(filterBrand = 'all', searchQuery = '') {
  const grid = document.getElementById('models-grid');
  if (!grid) return;

  const models = window.SBC_DATA.models.filter(m => {
    const matchesBrand = filterBrand === 'all' || 
      (filterBrand === 'rpi' && m.brand === 'Raspberry Pi') ||
      (filterBrand === 'radxa' && m.brand === 'Radxa');
    
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      m.name.toLowerCase().includes(query) ||
      m.soc.toLowerCase().includes(query) ||
      m.cpu.toLowerCase().includes(query) ||
      m.badge.toLowerCase().includes(query) ||
      m.idealFor.some(tag => tag.toLowerCase().includes(query));

    return matchesBrand && matchesSearch;
  });

  if (models.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-gray-400">
        <i data-lucide="search-x" class="w-12 h-12 mx-auto mb-3 opacity-50"></i>
        <p class="text-lg">No SBC models matched your query.</p>
        <button onclick="resetModelFilters()" class="mt-4 px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition">Clear filters</button>
      </div>
    `;
    initLucide();
    return;
  }

  grid.innerHTML = models.map(m => {
    const isRpi = m.brand === 'Raspberry Pi';
    const accentClass = isRpi ? 'border-pink-500/30 hover:border-pink-500' : 'border-emerald-500/30 hover:border-emerald-500';
    const badgeBg = isRpi ? 'bg-pink-500/10 text-pink-400 border-pink-500/30' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    const logoBadge = isRpi ? 'Raspberry Pi' : 'Radxa';
    const highlightPill = isRpi 
      ? `<span class="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${badgeBg}"><i data-lucide="sparkles" class="w-3 h-3"></i> ${m.badge}</span>`
      : `<span class="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${badgeBg}"><i data-lucide="zap" class="w-3 h-3"></i> ${m.badge}</span>`;

    return `
      <div class="glass-panel rounded-2xl p-6 transition-all duration-300 border ${accentClass} flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-gray-400">${logoBadge}</span>
            ${highlightPill}
          </div>
          
          <h3 class="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text ${isRpi ? 'group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-red-500' : 'group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-green-500'} transition-colors mb-2">
            ${m.name}
          </h3>

          <div class="space-y-2 mb-4 text-xs text-gray-300">
            <div class="flex items-start gap-2">
              <i data-lucide="cpu" class="w-4 h-4 text-gray-400 mt-0.5 shrink-0"></i>
              <span><strong class="text-gray-200">SoC:</strong> ${m.soc}</span>
            </div>
            <div class="flex items-start gap-2">
              <i data-lucide="microchip" class="w-4 h-4 text-gray-400 mt-0.5 shrink-0"></i>
              <span><strong class="text-gray-200">CPU:</strong> ${m.cpu}</span>
            </div>
            <div class="flex items-start gap-2">
              <i data-lucide="brain" class="w-4 h-4 ${m.npuTops > 0 ? (isRpi ? 'text-pink-400' : 'text-emerald-400') : 'text-gray-500'} mt-0.5 shrink-0"></i>
              <span><strong class="text-gray-200">NPU:</strong> ${m.npu}</span>
            </div>
            <div class="flex items-start gap-2">
              <i data-lucide="network" class="w-4 h-4 text-gray-400 mt-0.5 shrink-0"></i>
              <span><strong class="text-gray-200">Network:</strong> ${m.network}</span>
            </div>
            <div class="flex items-start gap-2">
              <i data-lucide="hard-drive" class="w-4 h-4 text-gray-400 mt-0.5 shrink-0"></i>
              <span class="truncate"><strong class="text-gray-200">Storage:</strong> ${m.storage}</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-1.5 mb-4">
            ${m.idealFor.slice(0, 3).map(tag => `<span class="text-[11px] px-2 py-0.5 rounded bg-gray-800/80 text-gray-300 border border-gray-700/50">${tag}</span>`).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-gray-800/80 flex items-center justify-between">
          <div>
            <span class="text-[11px] text-gray-400 block">Pricing</span>
            <span class="text-sm font-semibold text-white font-mono">${m.priceRange}</span>
          </div>
          <button onclick="openModelModal('${m.id}')" class="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white transition flex items-center gap-1.5">
            Full Specs <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  initLucide();
}

// Model Filter buttons
function setupModelFilters() {
  const brandButtons = document.querySelectorAll('[data-brand-filter]');
  const searchInput = document.getElementById('model-search-input');

  brandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      brandButtons.forEach(b => {
        b.classList.remove('bg-gray-700', 'text-white', 'border-gray-500');
        b.classList.add('bg-gray-800/60', 'text-gray-400', 'border-gray-800');
      });
      btn.classList.add('bg-gray-700', 'text-white', 'border-gray-500');
      btn.classList.remove('text-gray-400', 'bg-gray-800/60');

      const brand = btn.getAttribute('data-brand-filter');
      const query = searchInput ? searchInput.value : '';
      renderModels(brand, query);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeBrandBtn = document.querySelector('[data-brand-filter].text-white') || document.querySelector('[data-brand-filter="all"]');
      const brand = activeBrandBtn ? activeBrandBtn.getAttribute('data-brand-filter') : 'all';
      renderModels(brand, e.target.value);
    });
  }
}

window.resetModelFilters = function() {
  const searchInput = document.getElementById('model-search-input');
  if (searchInput) searchInput.value = '';
  const allBtn = document.querySelector('[data-brand-filter="all"]');
  if (allBtn) allBtn.click();
  else renderModels('all', '');
};

// Open Model Detail Modal
window.openModelModal = function(modelId) {
  const model = window.SBC_DATA.models.find(m => m.id === modelId);
  if (!model) return;

  const modal = document.getElementById('model-modal');
  const modalContent = document.getElementById('model-modal-content');
  if (!modal || !modalContent) return;

  const isRpi = model.brand === 'Raspberry Pi';
  const brandBadge = isRpi ? 'badge-rpi' : 'badge-radxa';
  const colorGradient = isRpi ? 'text-gradient-rpi' : 'text-gradient-radxa';

  modalContent.innerHTML = `
    <div class="p-6 md:p-8">
      <div class="flex items-start justify-between mb-4">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-semibold px-2 py-0.5 rounded-full ${brandBadge}">${model.brand}</span>
            <span class="text-xs text-gray-400">Released ${model.releaseYear}</span>
            <span class="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-300 font-mono">${model.formFactor}</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-extrabold ${colorGradient}">${model.name}</h2>
          <p class="text-sm text-gray-400 mt-1">${model.badge} &bull; Price guide: <strong class="text-gray-200">${model.priceRange}</strong></p>
        </div>
        <button onclick="closeModelModal()" class="p-2 text-gray-400 hover:text-white rounded-lg bg-gray-800/80 hover:bg-gray-700 transition">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <!-- Core Specs -->
        <div class="space-y-3 bg-gray-900/60 p-4 rounded-xl border border-gray-800 text-xs">
          <h4 class="text-sm font-semibold text-white flex items-center gap-2 border-b border-gray-800 pb-2">
            <i data-lucide="cpu" class="w-4 h-4 text-indigo-400"></i> Processing & Graphics
          </h4>
          <div><span class="text-gray-400">System on Chip:</span> <span class="text-gray-200 font-medium block">${model.soc}</span></div>
          <div><span class="text-gray-400">CPU Architecture:</span> <span class="text-gray-200 font-medium block">${model.cpu}</span></div>
          <div><span class="text-gray-400">GPU Graphics:</span> <span class="text-gray-200 font-medium block">${model.gpu}</span></div>
          <div><span class="text-gray-400">NPU AI Accelerator:</span> <span class="text-gray-200 font-medium block ${model.npuTops > 0 ? (isRpi ? 'text-pink-400' : 'text-emerald-400') : ''}">${model.npu}</span></div>
          <div><span class="text-gray-400">RAM Memory:</span> <span class="text-gray-200 font-medium block">${model.ramOptions.join(', ')} (${model.ramType})</span></div>
        </div>

        <!-- I/O and Connectivity -->
        <div class="space-y-3 bg-gray-900/60 p-4 rounded-xl border border-gray-800 text-xs">
          <h4 class="text-sm font-semibold text-white flex items-center gap-2 border-b border-gray-800 pb-2">
            <i data-lucide="plug" class="w-4 h-4 text-emerald-400"></i> I/O & Networking
          </h4>
          <div><span class="text-gray-400">Storage Interfaces:</span> <span class="text-gray-200 font-medium block">${model.storage}</span></div>
          <div><span class="text-gray-400">Wired Ethernet:</span> <span class="text-gray-200 font-medium block">${model.network}</span></div>
          <div><span class="text-gray-400">Wireless:</span> <span class="text-gray-200 font-medium block">${model.wireless}</span></div>
          <div><span class="text-gray-400">Displays:</span> <span class="text-gray-200 font-medium block">${model.videoOutput}</span></div>
          <div><span class="text-gray-400">PCI Express:</span> <span class="text-gray-200 font-medium block">${model.pcie}</span></div>
          <div><span class="text-gray-400">Power In:</span> <span class="text-gray-200 font-medium block">${model.power}</span></div>
        </div>
      </div>

      <!-- Strengths -->
      <div class="mt-6">
        <h4 class="text-sm font-semibold text-white mb-2 flex items-center gap-2">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i> Key Architectural Strengths
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${model.strengths.map(s => `
            <div class="flex items-start gap-2 text-xs text-gray-300 bg-gray-800/40 p-2.5 rounded-lg border border-gray-800">
              <i data-lucide="arrow-right-circle" class="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5"></i>
              <span>${s}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- OS and Ideal uses -->
      <div class="mt-6 pt-4 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="text-xs text-gray-400 block mb-1">Supported Operating Systems:</span>
          <div class="flex flex-wrap gap-1.5">
            ${model.osSupport.map(os => `<span class="text-[11px] px-2 py-0.5 rounded bg-gray-800 text-gray-300 border border-gray-700">${os}</span>`).join('')}
          </div>
        </div>
        <div class="flex gap-2">
          <a href="compare.html?board=${model.id}" class="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center gap-1.5">
            Compare in Head-to-Head <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  initLucide();
};

window.closeModelModal = function() {
  const modal = document.getElementById('model-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

// Use Cases Interactive Section
function setupUseCases() {
  const tabsContainer = document.getElementById('usecases-tabs');
  const contentContainer = document.getElementById('usecase-display');
  if (!tabsContainer || !contentContainer) return;

  const cases = window.SBC_DATA.useCases;

  // Render Tabs
  tabsContainer.innerHTML = cases.map((uc, idx) => `
    <button onclick="switchUseCase('${uc.id}')" data-uc-tab="${uc.id}" class="px-4 py-2.5 text-xs md:text-sm font-medium rounded-xl transition flex items-center gap-2 whitespace-nowrap ${idx === 0 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'bg-gray-800/80 text-gray-400 hover:bg-gray-800 hover:text-gray-200'}">
      <i data-lucide="${uc.icon}" class="w-4 h-4"></i>
      <span>${uc.title.split('&')[0].trim()}</span>
    </button>
  `).join('');

  renderUseCaseContent(cases[0].id);
  initLucide();
}

window.switchUseCase = function(ucId) {
  const allTabs = document.querySelectorAll('[data-uc-tab]');
  allTabs.forEach(tab => {
    if (tab.getAttribute('data-uc-tab') === ucId) {
      tab.classList.add('bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-600/30');
      tab.classList.remove('bg-gray-800/80', 'text-gray-400');
    } else {
      tab.classList.remove('bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-600/30');
      tab.classList.add('bg-gray-800/80', 'text-gray-400');
    }
  });

  renderUseCaseContent(ucId);
};

function renderUseCaseContent(ucId) {
  const container = document.getElementById('usecase-display');
  const uc = window.SBC_DATA.useCases.find(c => c.id === ucId);
  if (!container || !uc) return;

  container.innerHTML = `
    <div class="glass-panel rounded-2xl p-6 md:p-8 border border-gray-800 animate-fadeIn">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-gray-800/80 pb-6">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs uppercase font-bold tracking-wider text-indigo-400">${uc.category}</span>
          </div>
          <h3 class="text-2xl md:text-3xl font-extrabold text-white">${uc.title}</h3>
          <p class="text-sm text-gray-300 mt-1 max-w-3xl">${uc.shortDesc}</p>
        </div>
        <div class="shrink-0 flex gap-2">
          <a href="compare.html#benchmark-section" class="px-4 py-2 text-xs font-medium rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 flex items-center gap-1.5 transition">
            <i data-lucide="bar-chart-3" class="w-4 h-4 text-emerald-400"></i> See Benchmarks
          </a>
        </div>
      </div>

      <!-- Side-by-side Approach Comparison -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Raspberry Pi Approach -->
        <div class="bg-gray-900/60 rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-pink-400 flex items-center gap-1.5">
              <i data-lucide="cpu" class="w-4 h-4"></i> ${uc.rpiApproach.title}
            </span>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/30">Pi Ecosystem</span>
          </div>
          <p class="text-xs md:text-sm text-gray-300 mb-4 leading-relaxed">${uc.rpiApproach.description}</p>
          <div class="p-3 bg-pink-950/20 rounded-lg border border-pink-900/30 mb-4 text-xs">
            <strong class="text-pink-300 block mb-0.5">Hardware Capability:</strong>
            <span class="text-gray-300">${uc.rpiApproach.specs}</span>
          </div>
          <div class="space-y-1.5 text-xs">
            <strong class="text-gray-400 block mb-1">Key Advantages & Tradeoffs:</strong>
            ${uc.rpiApproach.pros.map(p => `<div class="flex items-start gap-1.5 text-gray-300"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"></i> <span>${p}</span></div>`).join('')}
            ${uc.rpiApproach.cons.map(c => `<div class="flex items-start gap-1.5 text-gray-400"><i data-lucide="alert-circle" class="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5"></i> <span>${c}</span></div>`).join('')}
          </div>
        </div>

        <!-- Radxa Approach -->
        <div class="bg-gray-900/60 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <i data-lucide="zap" class="w-4 h-4"></i> ${uc.radxaApproach.title}
            </span>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">Radxa Hardware Power</span>
          </div>
          <p class="text-xs md:text-sm text-gray-300 mb-4 leading-relaxed">${uc.radxaApproach.description}</p>
          <div class="p-3 bg-emerald-950/20 rounded-lg border border-emerald-900/30 mb-4 text-xs">
            <strong class="text-emerald-300 block mb-0.5">Hardware Capability:</strong>
            <span class="text-gray-300">${uc.radxaApproach.specs}</span>
          </div>
          <div class="space-y-1.5 text-xs">
            <strong class="text-gray-400 block mb-1">Key Advantages & Tradeoffs:</strong>
            ${uc.radxaApproach.pros.map(p => `<div class="flex items-start gap-1.5 text-gray-300"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"></i> <span>${p}</span></div>`).join('')}
            ${uc.radxaApproach.cons.map(c => `<div class="flex items-start gap-1.5 text-gray-400"><i data-lucide="alert-circle" class="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5"></i> <span>${c}</span></div>`).join('')}
          </div>
        </div>
      </div>

      <!-- Project Recipe / Implementation Guide -->
      <div>
        <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i data-lucide="code-2" class="w-5 h-5 text-indigo-400"></i> Implementation Recipe & Architecture
        </h4>
        <div class="space-y-4">
          ${uc.recipes.map(recipe => `
            <div class="bg-gray-950 rounded-xl border border-gray-800 p-5">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div class="flex items-center gap-2">
                  <span class="text-sm font-semibold text-white">${recipe.name}</span>
                  <span class="text-[11px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">${recipe.difficulty}</span>
                </div>
                <div class="text-xs text-gray-400">
                  Recommended: <strong class="text-gray-200">${recipe.recommendedBoard}</strong>
                </div>
              </div>

              <!-- Terminal Code with Copy -->
              <div class="relative group/code mb-3">
                <pre class="bg-black/80 rounded-lg p-3.5 text-xs text-emerald-400 font-mono overflow-x-auto border border-gray-800"><code>${recipe.codeSnippet}</code></pre>
                <button onclick="copyRecipeCode(this)" data-code="${encodeURIComponent(recipe.codeSnippet)}" class="absolute top-2 right-2 px-2.5 py-1 text-xs rounded bg-gray-800 hover:bg-gray-700 text-gray-300 opacity-80 hover:opacity-100 transition flex items-center gap-1">
                  <i data-lucide="copy" class="w-3 h-3"></i> Copy
                </button>
              </div>

              <div class="flex flex-wrap items-center gap-2 text-xs text-gray-400">
                <span class="text-gray-500">Hardware BOM:</span>
                ${recipe.hardwareNeeded.map(h => `<span class="px-2 py-0.5 rounded bg-gray-900 text-gray-300 border border-gray-800 font-mono text-[11px]">${h}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  initLucide();
}

window.copyRecipeCode = function(btn) {
  const code = decodeURIComponent(btn.getAttribute('data-code'));
  navigator.clipboard.writeText(code).then(() => {
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i data-lucide="check" class="w-3 h-3 text-emerald-400"></i> Copied!`;
    initLucide();
    setTimeout(() => {
      btn.innerHTML = originalText;
      initLucide();
    }, 2000);
  });
};

// Interactive Terminal Simulator
function setupTerminalSimulator() {
  const terminalInput = document.getElementById('term-input');
  const terminalOutput = document.getElementById('term-output');
  const machineSelect = document.getElementById('term-machine');
  const commandPills = document.querySelectorAll('[data-term-cmd]');

  if (!terminalInput || !terminalOutput) return;

  const terminalCommands = {
    'uname -a': {
      rpi: `Linux raspberrypi 6.6.20+rpt-rpi-2712 #1 SMP PREEMPT Debian 1:6.6.20-1+rpt1 (2024-03-07) aarch64 GNU/Linux`,
      radxa: `Linux radxa-dragon-q8b 6.8.0-qualcomm-sc8280xp #1 SMP PREEMPT_DYNAMIC aarch64 GNU/Linux (5nm Kryo Octa-core)`
    },
    'lscpu': {
      rpi: `Architecture:           aarch64
Byte Order:             Little Endian
CPU(s):                 4
On-line CPU(s) list:    0-3
Model name:             ARM Cortex-A76 (Broadcom BCM2712 - 16nm)
Thread(s) per core:     1
Core(s) per cluster:    4
CPU max MHz:            2400.0000
CPU min MHz:            1500.0000
L1d / L1i cache:        64 KiB / 64 KiB
L2 cache:               512 KiB per core
L3 cache:               2 MiB shared`,
      radxa: `Architecture:           aarch64
Byte Order:             Little Endian
CPU(s):                 8
On-line CPU(s) list:    0-7
Model name:             Qualcomm Kryo 64-bit (Snapdragon 8cx Gen 3 - 5nm)
Thread(s) per core:     1
Cluster 0:              4x Kryo Prime cores @ 3000.0000 MHz
Cluster 1:              4x Kryo Gold cores  @ 2419.2000 MHz
L1d / L1i cache:        64 KiB / 64 KiB
L2 cache:               1024 KiB per core
L3 / System Cache:      8 MiB system-level cache (SLC)`
    },
    'npu-smi': {
      rpi: `[NPU Subsystem Status]
No on-chip NPU detected on Broadcom BCM2712.
Status: Offline (Native BCM2712 has 0 TOPS).
Tip: Plug in official Raspberry Pi AI HAT+ with Hailo-8L PCIe module for 13 to 26 TOPS.`,
      radxa: `+-----------------------------------------------------------------------------+
| Qualcomm Hexagon NPU Device Control & Status (Radxa Dragon Q8B)             |
| Driver Version: 2.14.0-qualcomm         Firmware: v83.1.2024                |
|-----------------------------------------------------------------------------|
| NPU  Name                   Compute   Temp   Power     NPU-Util   Memory    |
|=============================================================================|
|  0   Qualcomm Hexagon DSP   29.5 TOPS  39°C   3.4W       12%      1.2G/16G  |
+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  PID   Task                 Type      Core Mode      Context Allocated      |
|  1420  ollama_hexagon       Vision/LLM FP16/INT8     4.1 GB (128-bit Bus)   |
+-----------------------------------------------------------------------------+`
    },
    'lspci': {
      rpi: `00:00.0 PCI bridge: Broadcom Inc. and subsidiaries BCM2712 PCIe Bridge (rev 21)
0000:01:00.0 Non-Volatile memory controller: Silicon Motion, Inc. Device 2263 (rev 03)
[Info] PCIe 2.0 x1 link active (Speed: 5.0 GT/s, Width: x1 ~ 450 MB/s)`,
      radxa: `00:00.0 PCI bridge: Qualcomm Technologies SC8280XP PCIe Root Complex Port 1
00:01.0 PCI bridge: Qualcomm Technologies SC8280XP PCIe Root Complex Port 2
0001:01:00.0 Non-Volatile memory controller: Samsung 980 Pro NVMe [PCIe 3.0 x4 ~ 3500 MB/s]
0002:01:00.0 Non-Volatile memory controller: Crucial P3 Plus NVMe   [PCIe 3.0 x2 ~ 1800 MB/s]
0003:01:00.0 Ethernet controller: Realtek Semiconductor RTL8125 2.5GbE [Port 1]
0004:01:00.0 Ethernet controller: Realtek Semiconductor RTL8125 2.5GbE [Port 2]
0005:01:00.0 Network controller: Qualcomm WCN6855 Wi-Fi 6E/BT 5.3`
    },
    'iperf3': {
      rpi: `Connecting to benchmark host 192.168.1.100, port 5201
[  5] local 192.168.1.55 port 48102 connected to 192.168.1.100 port 5201
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-1.00   sec   112 MBytes   941 Mbits/sec    0
[  5]   1.00-2.00   sec   112 MBytes   942 Mbits/sec    0
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-10.00  sec  1.09 GBytes   941 Mbits/sec  (Gigabit Line Rate Max)`,
      radxa: `Connecting to 2.5G Switch host 192.168.1.200, port 5201 (Dual NIC Port eth0)
[  5] local 192.168.1.88 port 59200 connected to 192.168.1.200 port 5201
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-1.00   sec   281 MBytes  2.36 Gbits/sec    0
[  5]   1.00-2.00   sec   282 MBytes  2.37 Gbits/sec    0
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-10.00  sec  2.76 GBytes  2.37 Gbits/sec  (2.5GbE Line Rate achieved!)
[Info] Port eth1 is concurrently servicing 2.5GbE LAN clients.`
    },
    'ollama run llama3.2': {
      rpi: `pulling manifest...
verifying sha256 digest...
[Warning] No NPU detected. Executing on 4x Cortex-A76 CPU cores.
Prompt eval rate: 6.2 tokens/s
Response eval rate: 1.8 tokens/s
>>> Hello! I am running on your Raspberry Pi 5 CPU. Responses will take a few moments.`,
      radxa: `pulling manifest...
allocating Qualcomm Hexagon NPU context (29+ TOPS, DirectML/NPU Engine)...
Loaded Llama-3.2-3B into 128-bit 8-channel LPDDR4X memory.
Prompt eval rate: 84.5 tokens/s
Response eval rate: 14.8 tokens/s  [BLAZING FAST]
>>> Hello! I am running entirely on the Radxa Dragon Q8B's 29+ TOPS Hexagon NPU. How can I assist your edge AI application today?`
    }
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    const machine = machineSelect ? machineSelect.value : 'rpi';
    const promptPrefix = machine === 'rpi' ? 'pi@raspberrypi:~ $' : 'radxa@dragon-q8b:~ $';
    const promptColor = machine === 'rpi' ? 'text-pink-400' : 'text-emerald-400';

    const entry = document.createElement('div');
    entry.className = 'mt-3 animate-fadeIn';

    const commandLine = document.createElement('div');
    commandLine.className = 'flex items-center gap-2 font-mono text-xs';
    commandLine.innerHTML = `<span class="${promptColor} font-bold">${promptPrefix}</span> <span class="text-white">${escapeHtml(cmd)}</span>`;

    const resultBox = document.createElement('pre');
    resultBox.className = 'text-xs font-mono text-gray-300 mt-1.5 whitespace-pre-wrap leading-relaxed';

    if (cmd === 'clear') {
      terminalOutput.innerHTML = '';
      terminalInput.value = '';
      return;
    }

    if (terminalCommands[cmd]) {
      resultBox.textContent = terminalCommands[cmd][machine];
    } else {
      resultBox.textContent = `bash: command not found: ${cmd}. Available commands: uname -a, lscpu, npu-smi, lspci, iperf3, ollama run llama3.2, clear`;
      resultBox.className += ' text-red-400';
    }

    entry.appendChild(commandLine);
    entry.appendChild(resultBox);
    terminalOutput.appendChild(entry);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    terminalInput.value = '';
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput.value);
    }
  });

  commandPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const cmd = pill.getAttribute('data-term-cmd');
      executeCommand(cmd);
    });
  });

  if (machineSelect) {
    machineSelect.addEventListener('change', () => {
      const machine = machineSelect.value;
      const promptText = machine === 'rpi' ? 'pi@raspberrypi:~ $' : 'radxa@dragon-q8b:~ $';
      const promptEl = document.getElementById('term-prompt-label');
      if (promptEl) {
        promptEl.textContent = promptText;
        promptEl.className = machine === 'rpi' ? 'text-pink-400 font-bold font-mono text-xs' : 'text-emerald-400 font-bold font-mono text-xs';
      }
    });
  }
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
