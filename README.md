# 🌐 Alexis Pantoja - Professional 3D Developer Portfolio

Welcome to my interactive **3D Developer Portfolio** project, developed as a core academic deliverable for the **Graficación** (Computer Graphics) course in Computer Systems Engineering at the **Instituto Tecnológico de Mérida**.

This project blends modern front-end web design with immersive WebGL/Three.js technologies, showcasing real-world software applications and beautiful vector animations in a responsive, glassmorphism dark-themed dashboard.

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
The central element of this portfolio is an interactive, rotating 3D developer workspace. In accordance with the academic requirements of the *Graficación* course, the scene was created and edited in Blender. 

The original Blender project file is stored directly within this repository at:
📂 [assets/3d/protafolio.blend](file:///C:/Users/patri/OneDrive/Escritorio/Quinto%20semestre/Graficaci%C3%B3n/My_porfolio/My-Portfolio/assets/3d/protafolio.blend)

### 🎨 Model Showcase Specifications:
1.  **Developer Workbench (Desk):** Custom wood-textured tabletop that provides the workspace base.
2.  **Main Desktop Monitor:** High-fidelity widescreen screen displaying developer setups.
3.  **Mechanical Keyboard:** Segmented keyboard keycaps setup with color schemes matching the web design.
4.  **Gaming Mouse:** Compact ergonomic mouse designed as an integral part of the input controls.
5.  **PC Tower & Power Station:** Custom computer chassis acting as the source of computing power.
6.  **Ergonomic Office Chair:** Textured comfortable desk chair positioned directly in front of the setup.
7.  **Workspace Accessories (Desk Lamp & Plants):** Enhancing the lighting and bringing visual aesthetics to the virtual model.

---

## 🎨 Web Features & Interactivity
The site is built with modern user experiences in mind:
*   **WebGL Integration & OrbitControls:** Allows the visitor to pan, zoom, and rotate around the workspace. Auto-rotation is programmed natively using time-delta calculations, bypassing legacy clock limitations.
*   **3D Lighting Toggles:** Dynamic light temperature changes in real-time between cool white daylight and warm office amber light.
*   **Rotate/Pause Controls:** Interactive buttons to pause or resume model rotations immediately.
*   **Color Theme Toggle:** Smooth transitions between a futuristic purple-glow Dark Mode and a bright, modern Light Mode.
*   **Responsive Multi-Project Grid:** Beautifully showcases a looping mobile animation (Rive/Flutter) along with 3 advanced database systems built in AppSheet, fully optimized for mobile devices.

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

## 📦 Rubric Requirements Met
*   [x] **Página Web Estructurada:** Name, custom profile picture, "About Me" section detailing Tec de Mérida systems engineering studies, technical skills list, responsive projects grid, and contact links.
*   [x] **Blender 3D Scene:** 3D workspace model with 7 customized desktop elements.
*   [x] **Archivos en Repositorio:** Both `protafolio.glb` and the raw `protafolio.blend` file are fully uploaded to the workspace.
*   [x] **Integración WebGL:** High performance, custom centering loader, OrbitControls rotation, zoom, and damping.
*   [x] **Estilos y Diseño:** Custom dark CSS glassmorphism styling, fully responsive, grid systems.
*   [x] **Interacciones en JS:** 4 custom control layers (Auto-rotation, manual pause/resume, light temperature shifting, light/dark theme toggle).
*   [x] **Publicación:** Automatically built and hosted live on GitHub Pages through custom GitHub Actions.
*   [x] **Historial de Commits:** 4+ commits authored across 4+ different days in English.

---
*Created by Alexis Pantoja for the Graficación Academic Course (5th Semestre) - 2026.*