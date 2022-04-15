import setViewerSettings from "./Viewer.js";
import Animate, { setViewer } from "./Animate.js";
import addAllObjects from "./Objects.js";

window.viewer = new Potree.Viewer(
  document.getElementById("potree_render_area")
);

viewer = setViewerSettings(viewer);

addAllObjects(viewer);
setViewer(viewer);
Animate();
