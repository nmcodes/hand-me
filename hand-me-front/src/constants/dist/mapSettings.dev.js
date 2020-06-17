"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POINT_MARKER_ICON_CONFIG = exports.LINE_PATH_CONFIG = exports.mapSettings = void 0;

var _ColorPalette = _interopRequireDefault(require("@/constants/ColorPalette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WATER = _ColorPalette["default"].WATER,
    TRANSIT = _ColorPalette["default"].TRANSIT,
    ROAD_LOCAL = _ColorPalette["default"].ROAD_LOCAL,
    ROAD_ARTERIAL_STROKE = _ColorPalette["default"].ROAD_ARTERIAL_STROKE,
    ROAD_ARTERIAL_FILL = _ColorPalette["default"].ROAD_ARTERIAL_FILL,
    ROAD_HIGHWAY_STROKE = _ColorPalette["default"].ROAD_HIGHWAY_STROKE,
    ROAD_HIGHWAY_FILL = _ColorPalette["default"].ROAD_HIGHWAY_FILL,
    POI = _ColorPalette["default"].POI,
    LANDSCAPE = _ColorPalette["default"].LANDSCAPE,
    ADMIN_STROKE = _ColorPalette["default"].ADMIN_STROKE,
    ADMIN_FILL = _ColorPalette["default"].ADMIN_FILL,
    TEXT_STROKE = _ColorPalette["default"].TEXT_STROKE,
    TEXT_FILL = _ColorPalette["default"].TEXT_FILL,
    COLOR_POINT = _ColorPalette["default"].COLOR_POINT,
    COLOR_SELECTED_POINT = _ColorPalette["default"].COLOR_SELECTED_POINT,
    COLOR_POINT_FILL = _ColorPalette["default"].COLOR_POINT_FILL;
var POINT_MARKER_ICON_CONFIG = {
  path: "M 0, 0 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",
  strokeOpacity: 0.7,
  strokeWeight: 4,
  strokeColor: COLOR_POINT,
  fillColor: COLOR_SELECTED_POINT,
  fillOpacity: 0.7,
  scale: 1
};
exports.POINT_MARKER_ICON_CONFIG = POINT_MARKER_ICON_CONFIG;
var LINE_SYMBOL_CONFIG = {
  path: "M 0,-2 0,2",
  strokeOpacity: 1,
  strokeWeight: 2,
  scale: 1
};
var LINE_PATH_CONFIG = {
  clickable: false,
  geodesic: false,
  strokeOpacity: 0,
  strokeColor: COLOR_POINT_FILL,
  icons: [{
    icon: LINE_SYMBOL_CONFIG,
    repeat: "10px"
  }]
};
exports.LINE_PATH_CONFIG = LINE_PATH_CONFIG;
var mapSettings = {
  clickableIcons: false,
  streetViewControl: false,
  panControlOptions: false,
  gestureHandling: "cooperative",
  backgroundColor: LANDSCAPE,
  mapTypeControl: false,
  zoomControlOptions: {
    style: "SMALL"
  },
  zoom: 5,
  minZoom: 2,
  maxZoom: 8,
  styles: [{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": TEXT_FILL
    }]
  }, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": TEXT_STROKE
    }, {
      "lightness": 13
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": ADMIN_FILL
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": ADMIN_STROKE
    }, {
      "lightness": 14
    }, {
      "weight": 1.4
    }]
  }, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
      "color": LANDSCAPE
    }]
  }, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
      "color": POI
    }, {
      "lightness": 5
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": ROAD_HIGHWAY_FILL
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": ROAD_HIGHWAY_STROKE
    }, {
      "lightness": 25
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": ROAD_ARTERIAL_FILL
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": ROAD_ARTERIAL_STROKE
    }, {
      "lightness": 16
    }]
  }, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
      "color": ROAD_LOCAL
    }]
  }, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
      "color": TRANSIT
    }]
  }, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{
      "color": WATER
    }]
  }]
};
exports.mapSettings = mapSettings;