function loadPointCloud(url, position, scene) {
  Potree.loadPointCloud(url, "pointcloud", function (e) {
    var points = new Potree.Group();
    points.material.opacity = 1.0;
    points.material.wireframe = true;
    scene.add(points);

    var pointcloud = e.pointcloud;

    if (position !== undefined) {
      pointcloud.position.copy(position);
    }

    var material = pointcloud.material;
    material.size = 2;
    material.pointColorType = Potree.PointColorType.RGB; //RGB | DEPTH | HEIGHT | POINT_INDEX | LOD | CLASSIFICATION
    material.pointSizeType = Potree.PointSizeType.ADAPTIVE; //ADAPTIVE | FIXED
    material.shape = Potree.PointShape.CIRCLE; //CIRCLE | SQUARE

    points.add(pointcloud);
  });
}
