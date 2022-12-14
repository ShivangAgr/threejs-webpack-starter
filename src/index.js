import './styles.css';
import * as THREE from 'three';

console.log('Hello World!', { THREE });

/** Utils Setup */
const canvas = document.querySelector('.webgl');
const size = { width: window.innerWidth, height: window.innerHeight };

window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;

  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();

  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/** Geometry */
const geometry = new THREE.BoxGeometry();

/** Material */
const material = new THREE.MeshStandardMaterial({ color: 0x3399bb });

/** Meshes */
const mesh = new THREE.Mesh(geometry, material);

/** Lights */
const light = new THREE.PointLight();
light.position.z = 5;

/** Scene */
const scene = new THREE.Scene();
scene.add(mesh);
scene.add(light);

/** Perspective Camera */
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
camera.position.z = 5;

/** WebGL Renderer */
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
renderer.setSize(size.width, size.height);

/** render loop */
const render = () => {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);

  requestAnimationFrame(render);
};

requestAnimationFrame(render);
