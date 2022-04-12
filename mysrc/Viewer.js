export default function setViewerSettings(viewer) {
  viewer.setEDLEnabled(true);
  viewer.setFOV(90);
  viewer.setPointBudget(1_000_000);
  viewer.loadSettingsFromURL();
  viewer.setMinNodeSize(100);
  viewer.setControls(viewer.fpControls);
  viewer.fpControls.lockElevation = true;
  viewer.setMoveSpeed(1);

  viewer.setDescription("Loading Octree of LAS files");

  viewer.loadGUI(() => {
    viewer.setLanguage("en");
    $("#menu_appearance").next().show();
  });
  viewer.setMoveSpeed(1);
  return viewer;
}
