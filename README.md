# 🌐 Alexis Pantoja - Personal Developer Portfolio

Welcome to my **Personal Developer Portfolio**, representing my journey, skills, and creations in Computer Systems Engineering.

This project serves as a personal hub to showcase my software projects, low-code database integrations, and overall path in systems development. To create an engaging and customized user experience, the portfolio integrates an interactive 3D developer workspace modeled in Blender and loaded via WebGL/Three.js, presented within a clean, responsive glassmorphism dark-themed dashboard.

---

## 🚀 Live Demo
🔗 **Visit the Live Site:** [https://patocalipto.github.io/My-Portfolio/](https://patocalipto.github.io/My-Portfolio/)

---

## 🛠️ Technology Stack
*   **Front-End Structure & Styling:** Semantic HTML5, CSS3 Custom Properties (Vanilla HSL-tailored dark theme & Glassmorphism layouts, CSS Grid & Flexbox).
*   **3D Graphics & Engine:** Three.js (via ESM CDN) utilizing `WebGLRenderer`, `GLTFLoader` with customized bounding-box centering calculations, and camera control damping.
*   **3D Scenery Creation:** Blender (polygon modeling, group hierarchy structuring, and GLTF/GLB exporting).
*   **Specialized Assets & Runtimes:** Rive (vector animation simulator) & AppSheet (low-code custom cloud databases).
*   **Build Toolchain & Deployment:** Vite (ES modules optimizer), npm packages, and automated compilation & delivery using GitHub Actions workflows.

---

## 🖥️ Blender 3D Scene Elements
To complement this personal space, the portfolio features an interactive, rotating 3D developer workspace. The scene was designed, modeled, and optimized entirely in Blender.

The original Blender project file is stored directly within this repository at:
📂 [assets/3d/protafolio.blend](file:///C:/Users/patri/OneDrive/Escritorio/Quinto%20semestre/Graficaci%C3%B3n/My_porfolio/My-Portfolio/assets/3d/protafolio.blend)

---

## 🎨 Web Features & Interactivity
The site is built with modern web practices and user interaction in mind:
*   **WebGL Integration & OrbitControls:** Allows the visitor to pan, zoom, and rotate around the workspace. Auto-rotation is programmed natively using time-delta calculations, bypassing legacy clock limitations.
*   **3D Lighting Toggles:** Dynamic light temperature changes in real-time between cool white daylight and warm office amber light.
*   **Rotate/Pause Controls:** Interactive buttons to pause or resume model rotations immediately.
*   **Color Theme Toggle:** Smooth transitions between a futuristic purple-glow Dark Mode and a bright, modern Light Mode.
*   **Responsive Multi-Project Grid:** Showcases a looping mobile animation (Rive/Flutter) along with 3 database systems built in AppSheet, fully optimized for mobile devices.
*   **Interactive Contact Pill:** Includes a copy-to-clipboard button and a direct web Gmail composer to make getting in touch seamless across devices.

---

## ⚙️ How to Run & Build Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Install dependencies
```bash
npm install
```

### 2. Run the developer server
If you are on Windows PowerShell and experience an `UnauthorizedAccess` execution lock, switch to **Command Prompt (CMD)** or run `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` first. Then start:
```bash
npm run dev
```
Open the local URL displayed (e.g., `http://localhost:5173`) in your web browser.

### 3. Build for Production
To bundle and optimize the project assets for deployment:
```bash
npm run build
```

---

---
*Created by Alexis Pantoja - Computer Systems Engineering Student - 2026.*