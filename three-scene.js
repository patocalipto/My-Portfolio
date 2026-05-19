import * as THREE from 'https://esm.sh/three';
import { OrbitControls } from 'https://esm.sh/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://esm.sh/three/examples/jsm/loaders/GLTFLoader.js';

export function initThreeScene() {
  const container = document.getElementById('canvas-container');
  if (!container) return;

  // 1. Escena
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#202020'); // Fondo temporal del canvas

  // 2. Cámara
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(5, 5, 5);

  // 3. Renderizador
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  container.appendChild(renderer.domElement);

  // 4. Controles (OrbitControls) - Permite rotar, zoom y paneo
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Rotación suave
  controls.dampingFactor = 0.05;

  // 5. Iluminación
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 10, 7);
  scene.add(directionalLight);

  // 6. Cargar Modelo GLTF/GLB
  let mixer; // Para animaciones que vengan dentro del modelo
  let modelGroup; // Referencia para poder rotarlo manualmente
  
  const loader = new GLTFLoader();
  
  // -- PLACEHOLDER TEMPORAL --
  // Como aún no tenemos tu modelo .glb, cargamos un cubo. 
  // Cuando tengas tu modelo, comenta estas 4 líneas y descomenta la sección de abajo.
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshStandardMaterial({ color: 0x3b82f6 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  modelGroup = cube;

  /*
  // -- CÓDIGO PARA TU MODELO REAL --
  // Pon tu archivo .glb en la carpeta "public" y carga su ruta (ej: '/mi-setup.glb')
  loader.load(
    '/tu-modelo.glb',
    function (gltf) {
      modelGroup = gltf.scene;
      scene.add(modelGroup);
      
      // Ajustar escala/posición si tu modelo es muy grande o muy pequeño:
      // modelGroup.scale.set(1, 1, 1);
      // modelGroup.position.set(0, 0, 0);

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
  */

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
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();

    if (isAnimating && modelGroup) {
      // Rotar lentamente el modelo completo (o el cubo de prueba)
      modelGroup.rotation.y += 0.5 * delta;
    }

    if (mixer && isAnimating) {
      mixer.update(delta);
    }

    controls.update(); // Requerido para que funcione el damping
    renderer.render(scene, camera);
  }

  animate();
}
