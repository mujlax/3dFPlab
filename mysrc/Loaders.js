/**
 * Загрузчик THREE.js объектов и добавление на сцену
 * @param {*} loader - Любой loader, имеющий load из библиотеки THREE.js. Например FBXLoader()
 * @param {Potree.Viewer} scene - viwer.scene.scene из Potree.Viewer чтобы добавить объект в сцену
 * @param {string} url - Путь до объекта
 * @param {(object)=>{}} fun - Функция действия с текущим загруженным объектом
 */
export default function ObjectLoader(loader, scene, url, fun) {
  loader.load(
    url,
    (object) => {
      if (fun !== undefined) fun(object);
      scene.add(object);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
}
