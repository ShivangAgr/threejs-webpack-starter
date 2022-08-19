console.log('Hello World!', { THREE });
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

/** Scene */
const scene = new THREE.Scene();

/** Perspective Camera */
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);

/** WebGL Renderer */
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(size.width, size.height);

/** render loop */
const render = () => {
	renderer.render(scene, camera);

	requestAnimationFrame(render);
}

requestAnimationFrame(render);
