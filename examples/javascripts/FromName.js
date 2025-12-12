// Display an image given its ID.

var image = ee.Image('CGIAR/SRTM90_V4');
// Center the Map.
Map.setCenter(41.7556, 9.2432, 12);
// Display the image.
Map.addLayer(image, {min: 0, max: 3000}, 'SRTM');
