import * as THREE from "three";

export function renderCube(
  el: HTMLDivElement
): THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial> {
  const scene = new THREE.Scene();
  scene.background = null;

  const camera = new THREE.PerspectiveCamera(
    75,
    el.offsetWidth / el.offsetHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(el.offsetWidth, el.offsetHeight);
  renderer.setPixelRatio(devicePixelRatio);
  el.appendChild(renderer.domElement);

  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  const boxGeometry = new THREE.BoxGeometry();
  const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
  const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

  scene.add(boxMesh);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    boxMesh.rotation.x += 0.01;
    boxMesh.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();

  return boxMesh;
}
