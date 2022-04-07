let canvas = null;
function createValues() {
  canvas = document.createElement("canvas");
  canvas.style.position = "absolute";
  canvas.style.top = "0px";
  canvas.style.left = "0px";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  document.body.appendChild(canvas);
  return canvas;
}

function addEventListeners(controls) {
  const menuPanel = document.getElementById("menuPanel");
  const startButton = document.getElementById("startButton");
  startButton.addEventListener(
    "click",
    function () {
      controls.lock();
      //controls.isLocked = true
    },
    false
  );
  controls.addEventListener("lock", () => (menuPanel.style.display = "none"));
  controls.addEventListener(
    "unlock",
    () => (menuPanel.style.display = "block")
  );
}

if (canvas != null)
  canvas.onmousemove = function (event) {
    normalized.set(
      (event.clientX / canvas.width) * 2 - 1,
      -(event.clientY / canvas.height) * 2 + 1
    );
    raycaster.setFromCamera(normalized, camera);
  };

if (canvas != null)
  canvas.ondblclick = function (event) {
    var intesects = raycaster.intersectObject(scene, true);

    if (intesects.length > 0) {
      var geometry = new THREE.SphereBufferGeometry(0.1, 32, 32);
      var material = new THREE.MeshBasicMaterial({ color: 0xaa4444 });
      var sphere = new THREE.Mesh(geometry, material);
      sphere.position.copy(intesects[0].point);
      scene.add(sphere);
    }
  };

// let keyboard = () => new THREEx.KeyboardState();
// let scene = new THREE.Scene();
// let camera = () => new THREE.PerspectiveCamera(90, 1, 0.1, 1000);
// let clock = () => new THREE.Clock();
