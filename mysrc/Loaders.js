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
