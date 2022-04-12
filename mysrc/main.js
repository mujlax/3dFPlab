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
let mixer, mixer2;

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  if (mixer) mixer.update(delta);

  if (mixer2) mixer2.update(delta);
}

ObjectLoader(new FBXLoader(), scene, "../pointclouds/fbx/man.fbx", (object) => {
  object.position.z = 5
  object.position.y = 75
  object.position.x = 10
  object.rotation.x = 77
  object.rotation.y = -3
  object.scale.set(2.6,2.6,2.6)

  mixer = new THREE.AnimationMixer(object);
  const action = mixer.clipAction(object.animations[0]);
  action.play();
});

ObjectLoader(new FBXLoader(), scene, "../pointclouds/fbx/Dance_Hip_Hop_4.fbx", (object) => {
      object.position.z = 5 //height
      object.position.y = -175 
      object.position.x = 15
      object.rotation.x = 77
      object.rotation.y = -3 //Z
      object.position.x = 0;
      object.scale.set(0.04,0.04,0.04)
  mixer2 = new THREE.AnimationMixer(object);
  const action = mixer2.clipAction(object.animations[0]);
  action.play();
});



Potree.loadPointCloud("../pointclouds/Cor_1/cloud.js", "lion", function(e){
  viewer.scene.addPointCloud(e.pointcloud);
  
  let material = e.pointcloud.material;
  material.size = 1;
  material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
  
  e.pointcloud.position.x += 3;
  e.pointcloud.position.y -= 3;
  e.pointcloud.position.z += 4;
  
  //viewer.fitToScreen();
});

// const GeomSpher = new THREE.SphereBufferGeometry(10, 32, 32);
// var pt = new THREE.Points(
//   GeomSpher,
//   new THREE.PointsMaterial({
//     color: 0x00afaf,
//     size: 0.3,
//   })
// );

//scene.add(pt);

const directional = new THREE.DirectionalLight(0xffffff, 1.0);
directional.position.set(10, 10, 10);
directional.lookAt(0, 0, 0);

const ambient = new THREE.AmbientLight(0x555555, 5);

//scene.add(directional);
scene.add(ambient);

animate();
