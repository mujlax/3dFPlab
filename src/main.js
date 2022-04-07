let speed = "Скорость: ";
var distance = 0.2;

function zalupa(slideAmount) {
  distance = slideAmount;
  value_slider.innerHTML = speed + slideAmount;
}

document.body.onload = function () {
  //three.js
  let value_slider = document.getElementById("value_slider");

  value_slider.innerHTML = speed + distance;

  var keyboard = new THREEx.KeyboardState();
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(90, 1, 0.1, 1000);
  var clock = new THREE.Clock();

  canvas = createValues();

  var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    logarithmicDepthBuffer: true,
    context: null,
    precision: "highp",
    premultipliedAlpha: true,
    antialias: true,
    preserveDrawingBuffer: false,
    powerPreference: "high-performance",
  });

  var geometry = new THREE.BoxBufferGeometry(2500, 1, 2500);
  var material = new THREE.MeshBasicMaterial({ color: 0x44aa44 });
  var cube = new THREE.Mesh(geometry, material);
  cube.position.y = -2;
  scene.add(new THREE.AmbientLight(0xffffff));
  var controls = new THREE.PointerLockControls(camera, canvas);

  addEventListeners(controls);

  //camera.position.z = 30;
  camera.position.y = 15;

  var raycaster = new THREE.Raycaster();
  raycaster.params.Points.threshold = 1e-2;
  var normalized = new THREE.Vector2();

  Potree.Global.workerPath = "./source";

  // loadPointCloud("data/lion_takanawa_ept_laz/ept.json", new THREE.Vector3(-4, -4, 3.0));
  // loadPointCloud("data/lion_takanawa_ept_bin/ept.json", new THREE.Vector3(-11, -4, 3.0));
  loadPointCloud("data/test2/cloud.js", new THREE.Vector3(0, 0, 0.0), scene);
  loadPointCloud(
    "data/lion_takanawa/cloud.js",
    new THREE.Vector3(50, 0, 0.0),
    scene
  );

  let press = false;
  let delay = 200;
  function move() {
    console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
    // camera.position.y = 15 + px
  }

  let array = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "a",
    "b",
    "c",
    "d",
    "e",
    "a",
    "b",
    "c",
    "d",
    "e",
    "a",
    "b",
    "c",
    "d",
    "e",
    "a",
    "b",
    "c",
    "d",
    "e",
    "a",
    "b",
    "c",
    "d",
    "e",
  ];

  function loop() {
    cube.rotation.y += 0.01;

    //controls.update();
    renderer.render(scene, camera);
    // let distance = 0.30
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 500 * delta; // 200 pixels per second
    //var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("W")) controls.moveForward(distance);
    if (keyboard.pressed("D")) controls.moveRight(distance);
    if (keyboard.pressed("S")) controls.moveForward(-distance);
    if (keyboard.pressed("A")) controls.moveRight(-distance);
    // let press = false;
    if (keyboard.pressed("ctrl") && !press) {
      camera.position.y = 8;
    } else if (keyboard.pressed("space") && !press) {
      camera.position.y = 23;
      // press = true;
      // setTimeout(jump, 1000)
    } else if (!press) {
      camera.position.y = 15;
    }

    // console.log("AAAAAAAAAAA")

    requestAnimationFrame(loop);
  }

  loop();

  document.body.onresize = function () {
    var width = window.innerWidth;
    var height = window.innerHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  document.body.onresize();
};
