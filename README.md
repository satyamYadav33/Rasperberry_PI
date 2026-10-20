# SBC Universe: Raspberry Pi & Radxa Interactive Showcase & Comparison Hub

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/satyamYadav33/Rasperberry_PI)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/satyamYadav33/Rasperberry_PI)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://en.wikipedia.org/wiki/HTML5)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

An interactive, high-fidelity web platform dedicated to showcasing the single-board computer (SBC) ecosystems of **Raspberry Pi** and **Radxa**, featuring real-world project usage blueprints and an in-depth, head-to-head hardware and architectural comparison between the **Raspberry Pi 5** and the **Radxa Dragon Q8B**.

---

## 🌟 Live Portal Pages

1. **Usage & Ecosystem Hub (`index.html` / `/usage`)**:
   - **Full Hardware Index**: Complete catalog of 8+ SBCs across both brands (Raspberry Pi 5, Pi 4B, Pi Zero 2W, CM4/CM5, Radxa Dragon Q8B, Rock 5B+, Rock 5 ITX, Radxa Zero 3W).
   - **Real-World Project Recipes**: 6 core domains (Edge AI & Vision, Home Lab & NAS, 2.5G Networking/Firewall, Robotics & IoT, 4K120/8K Media & Gaming, ARM Desktop Dev) with copyable bash/python code and Bill of Materials (BOM).
   - **Interactive Terminal Simulator ("SBC Console")**: Switch between Pi 5 and Dragon Q8B, run real Linux diagnostics (`lscpu`, `npu-smi`, `lspci`, `iperf3`, `ollama run llama3.2`).
   - **Filterable Model Explorer**: Search by processor, RAM, NPU, networking, or price.

2. **Dedicated Head-to-Head Comparison Page (`compare.html` / `/compare`)**:
   - **Interactive Photo Hotspot Inspector**: High-resolution hardware teardown using the physical board photographs (Dual 2.5GbE LAN ports, Underside Dual M.2 M-Key NVMe slots, Active cooler, 40-pin GPIO, RAM capacity markings, Retail packaging badges, and Official Pi 5 pricing tiers). Click glowing pins to inspect differences.
   - **Side-by-Side Specification Matrix**: Switchable matchups with highlighting winner badges across 10 hardware categories.
   - **Interactive Benchmark Arena**: Chart.js graphs for Geekbench 6 Single/Multi-core, AI NPU TOPS, NVMe Read Speeds (MB/s), and aggregate Network Bandwidth.
   - **Real-World Execution Duration Simulator**: Compares kernel compilation times, local LLM token generation rates, and 100GB LAN file transfers.
   - **"Which SBC Should You Buy?" Quiz**: 5-question weighted recommendation wizard that provides an instant calculated match percentage and custom justification.
   - **Total Cost of Ownership (TCO) Calculator**: Configure boards and accessories side-by-side to reveal the real cost after adding active coolers, power supplies, NVMe HATs, and AI accelerators.
   - **Ecosystem Migration Guide & Command Translation**: Side-by-side cheat sheet mapping Raspberry Pi OS tools (`raspi-config`, `vcgencmd`) to Radxa/Armbian equivalents (`rsetup`, `libgpiod`, Qualcomm NPU SDK).

---

## ⚡ Deployment Ready: Vercel & Netlify

This project is pre-configured with zero setup required for instant deployment:

### 1. Deploy on Vercel
- Pre-configured `vercel.json` provides:
  - Clean URLs: visit `/compare` or `/usage` without `.html` extensions.
  - Automatic routing rewrites and security headers (`X-Frame-Options`, `X-Content-Type-Options`).
  - 1-Year immutable caching for `/assets/**`.
- **How to deploy:**
  1. Go to [vercel.com/new](https://vercel.com/new).
  2. Import `satyamYadav33/Rasperberry_PI`.
  3. Keep the root directory as `./` and Framework Preset as `Other`.
  4. Click **Deploy**!

### 2. Deploy on Netlify
- Pre-configured `netlify.toml` and `_redirects` provide:
  - Auto-publish root directory `publish = "."`.
  - 200 HTTP rewrite rules for `/compare` and `/usage`.
  - Content security and cache control headers.
- **How to deploy:**
  1. Go to [app.netlify.com/start](https://app.netlify.com/start).
  2. Select GitHub and choose `satyamYadav33/Rasperberry_PI`.
  3. Netlify will auto-detect `netlify.toml`.
  4. Click **Deploy site**!

---

## 💻 Local Development

### Option A: Using Node.js (Recommended)
```bash
# Clone the repository
git clone https://github.com/satyamYadav33/Rasperberry_PI.git
cd Rasperberry_PI

# Start the local preview server
npm start
```
Then visit: `http://localhost:8080`

### Option B: Using Python
```bash
python server.py
```
Then visit:
- **Ecosystem & Usage Hub:** `http://localhost:8080/index.html`
- **Deep Comparison Page:** `http://localhost:8080/compare.html`

---

## 📁 Repository Structure

```
.
├── index.html                   # Main SBC Ecosystem & Project Usage Showcase
├── compare.html                 # Dedicated Head-to-Head Comparison Page
├── vercel.json                  # Vercel deployment configuration (clean URLs & caching)
├── netlify.toml                 # Netlify deployment configuration (headers & redirects)
├── _redirects                   # Netlify fallback routing rules
├── package.json                 # Project metadata & npm preview scripts
├── .gitignore                   # Ignore OS, Node, Python & cloud deployment metadata
├── .gitattributes               # Line ending normalization & binary rules
├── server.py                    # Lightweight Python HTTP server
├── README.md                    # Project documentation
└── assets/
    ├── css/
    │   └── custom.css           # Glassmorphism, cyber neon accents, photo hotspot animations
    ├── js/
    │   ├── data.js              # Comprehensive specs, benchmarks, recipes & quiz datasets
    │   ├── main.js              # Model rendering, use-case tabs, interactive terminal console
    │   └── compare.js           # Photo hotspot inspector, Chart.js benchmarks, TCO builder, quiz
    └── images/
        ├── favicon.svg          # Modern SBC chip SVG favicon
        ├── side_by_side_radxa_vs_pi5.jpg    # Real side-by-side comparison photo
        ├── radxa_dragon_ports.png           # Dual 2.5GbE, HDMI 2.1, USB-C DP Alt-mode
        ├── radxa_dragon_underside_m2.png    # Dual native M.2 M-Key slots + TF slot
        ├── radxa_dragon_box.png             # Retail packaging badges (29+ TOPS, 4K120)
        └── raspberry_pi_5_pricing.png       # Pi 5 pricing lineup ($45 to $305)
```

---

## 📜 License
Distributed under the MIT License. See `package.json` for details.
