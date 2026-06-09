window.marker = null;

function initializeOSMMap() {
  var $mapCanvas = $('#map_canvas');
  var latitude = parseFloat($mapCanvas.attr('data-latitude'));
  var longitude = parseFloat($mapCanvas.attr('data-longitude'));
  var mapMarker = $mapCanvas.attr('data-marker');
  var mapMarkerName = $mapCanvas.attr('data-marker-name');

  // Initialiser la carte avec style grayscale
  var map = L.map('map_canvas', {
    zoomControl: true,
    scrollWheelZoom: false,
    attributionControl: false
  }).setView([latitude, longitude], 15);

  // Tuiles OSM en noir et blanc (style grayscale)
  L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // Réactiver zoomControl (comme dans ton code original)
  L.control.zoom({
    position: 'topright'
  }).addTo(map);

  // Marqueur personnalisé (30x50px comme dans gmap.js)
  if (mapMarker) {
    var pinIcon = L.icon({
      iconUrl: mapMarker,
      iconSize: [30, 50],
      iconAnchor: [15, 50],
      popupAnchor: [0, -50]
    });
    marker = L.marker([latitude, longitude], {
      icon: pinIcon,
      title: mapMarkerName
    }).addTo(map);
  }
}

// Initialisation
if (document.getElementById('map_canvas') !== null) {
  $(document).ready(function() {
    initializeOSMMap();
  });
}
