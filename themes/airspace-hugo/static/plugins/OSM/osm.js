window.marker = null;

function initialize() {
  var $mapCanvas = $('#map_canvas');
  var latitude = parseFloat($mapCanvas.attr('data-latitude'));
  var longitude = parseFloat($mapCanvas.attr('data-longitude'));
  var mapMarker = $mapCanvas.attr('data-marker');
  var mapMarkerName = $mapCanvas.attr('data-marker-name');

  // Initialiser la carte avec un style grayscale (tuiles OSM noir et blanc)
  var map = L.map('map_canvas', {
    zoomControl: true,
    attributionControl: false, // Désactivé pour coller au style original
    scrollWheelZoom: false      // Désactive le zoom par molette (comme Google Maps par défaut)
  }).setView([latitude, longitude], 15);

  // Ajouter les tuiles OSM en grayscale
  L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // Désactiver les contrôles inutiles (comme dans ton code Google Maps)
  map.removeControl(map.zoomControl); // On réactive zoomControl plus bas
  map.zoomControl = L.control.zoom({
    position: 'topright' // Correspond à ZoomControlStyle.LARGE
  }).addTo(map);

  // Créer l'icône personnalisée (30x50px comme dans ton code)
  var pinIcon = L.icon({
    iconUrl: mapMarker,
    iconSize: [30, 50],
    iconAnchor: [15, 50], // Point d'ancrage au centre-bas de l'icône
    popupAnchor: [0, -50] // Position de la popup par rapport à l'icône
  });

  // Ajouter le marqueur
  marker = L.marker([latitude, longitude], {
    icon: pinIcon,
    title: mapMarkerName
  }).addTo(map);
}

// Initialisation
if (document.getElementById('map_canvas') !== null) {
  $(document).ready(function() {
    initialize();
  });
}
