import * as THREE from "../libs/three.js/build/three.module.js";
import { FBXLoader } from "../libs/three.js/loaders/FBXLoader.js";
import ObjectLoader from "./Loaders.js";
import setViewerSettings from "./Viewer.js";

// INIT
const clock = new THREE.Clock();
window.viewer = new Potree.Viewer(
  document.getElementById("potree_render_area")
);
viewer = setViewerSettings(viewer);
let scene = viewer.scene.scene;
let mixer;

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  if (mixer) mixer.update(delta);
}

ObjectLoader(new FBXLoader(), scene, "../pointclouds/fbx/man.fbx", (object) => {
  mixer = new THREE.AnimationMixer(object);
  const action = mixer.clipAction(object.animations[0]);
  action.play();
});

const GeomSpher = new THREE.SphereBufferGeometry(10, 32, 32);
var pt = new THREE.Points(
  GeomSpher,
  new THREE.PointsMaterial({
    color: 0x00afaf,
    size: 0.3,
  })
);

scene.add(pt);

const directional = new THREE.DirectionalLight(0xffffff, 1.0);
directional.position.set(10, 10, 10);
directional.lookAt(0, 0, 0);

const ambient = new THREE.AmbientLight(0x555555);

scene.add(directional);
scene.add(ambient);

animate();
