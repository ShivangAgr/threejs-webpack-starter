import './styles.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

console.log('Hello World!', { THREE });

/** Utils Setup */
const canvas = document.querySelector('.webgl');
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;

  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();

  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/** Scene */
const scene = new THREE.Scene();

/** Geometry */
const geometry = new THREE.BoxGeometry();

/** Material */
const material = new THREE.MeshStandardMaterial({ color: 0x3399bb });

/** Meshes */
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/** Lights */
const light = new THREE.PointLight();
light.position.z = 5;
scene.add(light);

/** Perspective Camera */
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
camera.position.z = 5;

/** Orbital Controls */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/** WebGL Renderer */
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/** Render loop */
const clock = new THREE.Clock();
const render = () => {
  const elapsedTime = clock.getElapsedTime();

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  controls.update();
  renderer.render(scene, camera);

  requestAnimationFrame(render);
};

requestAnimationFrame(render);
