import ee
import geemap

try:
    ee.Initialize()
except Exception as e:
    ee.Authenticate()
    ee.Initialize()

# Create an interactive map
Map = geemap.Map(center=(41.7556, 9.2432), zoom=4)
Map

# Add Earth Engine dataset
image = ee.Image("USGS/SRTMGL1_003")

# Set visualization parameters.
vis_params = {
    "min": 0,
    "max": 4000,
    "palette": ["006633", "E5FFCC", "662A00", "D8D8D8", "F5F5F5"],
}

# Print the elevation of Mount Everest.
xy = ee.Geometry.Point([41.73, 9.25])
elev = image.sample(xy, 30).first().get("elevation").getInfo()
print("Mount Everest elevation (m):", elev)

# Add Earth Engine layers to Map
Map.addLayer(image, vis_params, "SRTM DEM", True, 0.5)
Map.addLayer(xy, {"color": "red"}, "Mount Everest")

# Set center of the map
Map.centerObject(ee_object=xy, zoom=13)
Map.setCenter(lon=41.7556, lat=9.2432, zoom=4)
