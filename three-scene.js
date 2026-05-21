import * as THREE from 'https://esm.sh/three';
import { OrbitControls } from 'https://esm.sh/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://esm.sh/three/examples/jsm/loaders/GLTFLoader.js';
import modelUrl from './assets/3d/protafolio.glb?url';

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

  // 6. Cargar Modelo GLTF/GLB
  let mixer; // Para animaciones que vengan dentro del modelo
  let pivotGroup = new THREE.Group(); // Grupo padre para centrar la rotación
  scene.add(pivotGroup);
  
  const loader = new GLTFLoader();
  
  // Cargar tu modelo real
  loader.load(
    modelUrl,
    function (gltf) {
      const modelGroup = gltf.scene;
      
      // Calcular el centro exacto (visual) del modelo
      const box = new THREE.Box3().setFromObject(modelGroup);
      const center = box.getCenter(new THREE.Vector3());
      
      // Mover el modelo para que su centro quede exactamente en (0,0,0)
      modelGroup.position.x = -center.x;
      modelGroup.position.y = -center.y;
      modelGroup.position.z = -center.z;

      // Añadir el modelo al grupo pivot (ahora el pivot girará desde el centro real)
      pivotGroup.add(modelGroup);
      
      // Si tu modelo sale muy grande, muy pequeño o movido, descomenta estas líneas y juega con los valores (aplícalo a pivotGroup):
      // pivotGroup.scale.set(1, 1, 1);
      // pivotGroup.position.y = 0; // Para subirlo o bajarlo

      // Reproducir la primera animación si el modelo tiene alguna
      if (gltf.animations && gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(modelGroup);
        const action = mixer.clipAction(gltf.animations[0]);
        action.play();
      }
    },
    undefined,
    function (error) {
      console.error('Error al cargar el modelo 3D:', error);
    }
  );

  // 7. Responsive: Manejo de redimensionamiento
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  // 8. Interactividad: Botones en la UI interactuando con el 3D
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
      directionalLight.color.setHex(0xffaa00); // Luz cálida anaranjada
      directionalLight.intensity = 1.5;
    } else {
      directionalLight.color.setHex(0xffffff); // Luz blanca
      directionalLight.intensity = 1;
    }
  });

  // 9. Ciclo de Animación (Render Loop)
  let lastTime = 0;

  function animate(time) {
    requestAnimationFrame(animate);

    // Calcular el delta de tiempo en segundos de forma estándar
    if (!lastTime) lastTime = time;
    const delta = Math.min((time - lastTime) / 1000, 0.1); // Limitar delta para evitar saltos bruscos
    lastTime = time;

    if (isAnimating && pivotGroup) {
      // Rotar lentamente el grupo pivote (que ya tiene el modelo centrado)
      pivotGroup.rotation.y += 0.5 * delta;
    }

    if (mixer && isAnimating) {
      mixer.update(delta);
    }

    controls.update(); // Requerido para que funcione el damping
    renderer.render(scene, camera);
  }

  requestAnimationFrame(animate);
}
