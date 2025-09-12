// Composite an image collection and clip it to a boundary.

// Load Landsat 7 raw imagery and filter it to April-July 2000.
var collection = ee.ImageCollection('LANDSAT/LE07/C02/T1')
    .filterDate('2000-04-01', '2000-07-01');

// Reduce the collection by taking the median.
var median = collection.median();

// Load a table of state boundaries and filter.
var Park_Catchment = ee.FeatureCollection('projects/ee-zekuwany/assets/SHP/Park_Catchment');
var fc = Park_Catchment.geometry();

// Clip to the output image to the Nevada and Arizona state boundaries.
var clipped = median.clipToCollection(fc);

// Display the result.
Map.setCenter(41.80, 8.59, 5);
var visParams = {bands: ['B3', 'B2', 'B1'], gain: [1.4, 1.4, 1.1]};
Map.addLayer(clipped, visParams, 'clipped composite');
