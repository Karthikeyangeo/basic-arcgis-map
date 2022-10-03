
// Modules

const API_KEY = 'AAPKa0715609765c41539b67f1e687f0e80bIt8f-GqQ46hfzF9SzK3yJRaPicWvLWaqMXmohp7H3IoADqypgid2CLicEdaI3sC0';
require([
    "esri/config",
    "esri/Map", 
    "esri/views/MapView",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery"

], function (esriConfig,Map,MapView, BasemapToggle, BasemapGallery) {

    esriConfig.apiKey = API_KEY;

    const map = new Map({
      basemap: "arcgis-topographic" // Basemap layer service
    });

    

    // map view creation
    const view = new MapView({
      map: map,
      center: [ 80.23442321285744,13.01157875264937], // Longitude, latitude 
      zoom: 13, // Zoom level
      container: "viewDiv" // Div element
    });

    // Toggling between basemaps
    const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-imagery"
     });

    // Add the widget to the right 
    view.ui.add(basemapToggle,"bottom-right");

    // select basemaps from a gallery
    const basemapGallery = new BasemapGallery({
        view: view,
        source: {
          query: {
            title: '"World Basemaps for Developers" AND owner:esri'
          }
        }
      });

      view.ui.add(basemapGallery, "top-right"); // Add to the view

  });