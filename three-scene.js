import * as THREE from 'https://esm.sh/three';
import { OrbitControls } from 'https://esm.sh/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://esm.sh/three/examples/jsm/loaders/GLTFLoader.js';

export function initThreeScene() {
  const container = document.getElementById('canvas-container');
  if (!container) return;

  // 1. Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#202020'); // Temporary canvas background

  // 2. Camera
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(5, 5, 5);

  // 3. Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  container.appendChild(renderer.domElement);

  // 4. Controls (OrbitControls) - Allows rotation, zoom, and panning
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Smooth rotation
  controls.dampingFactor = 0.05;

  // 5. Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 10, 7);
  scene.add(directionalLight);

  // 6. Load GLTF/GLB Model
  let mixer; // For animations that come inside the model
  let modelGroup; // Reference to rotate it manually
  
  const loader = new GLTFLoader();
  
  // -- TEMPORARY PLACEHOLDER --
  // Since we don't have your .glb model yet, we load a cube. 
  // When you have your model, comment out these 4 lines and uncomment the section below.
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshStandardMaterial({ color: 0x3b82f6 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  modelGroup = cube;

  /*
  // -- CODE FOR YOUR REAL MODEL --
  // Put your .glb file in the "public" folder and load its path (e.g. '/my-setup.glb')
  loader.load(
    '/tu-modelo.glb',
    function (gltf) {
      modelGroup = gltf.scene;
      scene.add(modelGroup);
      
      // Adjust scale/position if your model is too big or too small:
      // modelGroup.scale.set(1, 1, 1);
      // modelGroup.position.set(0, 0, 0);

      // Play the first animation if the model has one
      if (gltf.animations && gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(modelGroup);
        const action = mixer.clipAction(gltf.animations[0]);
        action.play();
      }
    },
    undefined,
    function (error) {
      console.error('Error loading 3D model:', error);
    }
  );
  */

  // 7. Responsive: Resize handling
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  // 8. Interactivity: UI buttons interacting with the 3D scene
  let isAnimating = true;
  const toggleAnimBtn = document.getElementById('toggle-anim-btn');
  toggleAnimBtn.addEventListener('click', () => {
    isAnimating = !isAnimating;
  });

  let lightColorToggle = false;
  const toggleLightBtn = document.getElementById('toggle-light-btn');
  toggleLightBtn.addEventListener('click', () => {
    lightColorToggle = !lightColorToggle;
    if (lightColorToggle) {
      directionalLight.color.setHex(0xffaa00); // Warm orange light
      directionalLight.intensity = 1.5;
    } else {
      directionalLight.color.setHex(0xffffff); // White light
      directionalLight.intensity = 1;
    }
  });

  // 9. Animation Loop (Render Loop)
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();

    if (isAnimating && modelGroup) {
      // Slowly rotate the entire model (or test cube)
      modelGroup.rotation.y += 0.5 * delta;
    }

    if (mixer && isAnimating) {
      mixer.update(delta);
    }

    controls.update(); // Required for damping to work
    renderer.render(scene, camera);
  }

  animate();
}
