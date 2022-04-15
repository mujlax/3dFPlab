import * as THREE from "../libs/three.js/build/three.module.js";
let mixers = [];
let animateViewer = null;
const clock = new THREE.Clock();
/**
 * Проигрыватель анимации для всех mixers (объектов)
 */
export default function Animate() {
  requestAnimationFrame(Animate);
  const delta = clock.getDelta();
  mixers.map((mixer) => mixer.update(delta));
  viewer.setMoveSpeed(20);
  console.log("СПИД: ", viewer.getMoveSpeed());
}
/**
 * Установщик viewer в данный файл для корректной работы анимации (установка скорости и вывод в консоль, а так это можно вообще убрать, т.к. она (функция) нужна только для установки скорости)
 * @param {Potree.Viewer} viewer
 */
export function setViewer(viewer) {
  animateViewer = viewer;
}

/**
 * Установка анимации для объекта в момент создания объекта
 * @param {instanceof THREE.js Loader} object - добавленый объект
 * @param {number} numberAnimation - номер анимации в объекте
 */
export function setAnimation(object, numberAnimation) {
  let mixer = new THREE.AnimationMixer(object);
  const action = mixer.clipAction(object.animations[numberAnimation]);
  mixers.push(mixer);
  action.play();
}
