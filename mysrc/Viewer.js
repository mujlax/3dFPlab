/**
 * Начальная настройка viewer
 * @param {Potree.Viewer} viewer - главный viewer
 * @returns viewer
 */
export default function setViewerSettings(viewer) {
  viewer.loadGUI(() => {
    viewer.setLanguage("en");
    $("#menu_appearance").next().show();
  });
  viewer.scene.view.position.z = 20;
  viewer.setEDLEnabled(true);
  viewer.setFOV(90);
  viewer.setPointBudget(1_000_000);
  viewer.loadSettingsFromURL();
  viewer.setMinNodeSize(250);
  viewer.setControls(viewer.fpControls);
  viewer.fpControls.lockElevation = true;
  viewer.setDescription("Loading Octree of LAS files");
  return viewer;
}
