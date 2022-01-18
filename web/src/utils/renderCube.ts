import {
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  Scene,
} from "three";
import { Cube } from "../types/Cube";

export function renderCube(el: HTMLDivElement): Cube {
  const scene = new Scene();
  scene.background = null;

  const camera = new PerspectiveCamera(
    75,
    el.offsetWidth / el.offsetHeight,
    0.1,
    1000
  );

  const renderer = new WebGLRenderer({ alpha: true });
  renderer.setSize(el.offsetWidth, el.offsetHeight);
  renderer.setPixelRatio(devicePixelRatio);
  el.appendChild(renderer.domElement);

  const color = 0xffffff;
  const intensity = 1;
  const light = new DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  const boxGeometry = new BoxGeometry();
  const boxMaterial = new MeshPhongMaterial({ color: 0xff0000 });
  const boxMesh = new Mesh(boxGeometry, boxMaterial);

  scene.add(boxMesh);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    boxMesh.rotation.x += 0.006;
    boxMesh.rotation.y += 0.006;
    renderer.render(scene, camera);
  }
  animate();

  return boxMesh;
}
