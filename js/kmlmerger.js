var selectedFiles = [];
var geoJsonObjs = [];
var instructions = {
  'start': "Select 2 or more KML files to merge into a single layer.",
  'merge': "If you selected the correct files, click Merge Away!",
  'download': "Click Download to get your file.  Or Select Files to start again.",
};
var copyrightYear = (new Date()).getFullYear();
$(document).ready(function(){
  $('#terms-of-service').hide();
  $('#copyright').html('Copyright © ' + copyrightYear)
});

function showTos(){
  $('#terms-of-service').toggle();
}

function updateFileInfo(files) {
  $('#merge-files').hide();
  selectedFiles = files;
  if(selectedFiles.length >= 2 ){
    $('#merge-files').show();
    $('#instructions').html(instructions['merge']);
  }
  $('#download-container').html('');
  var fileListHtml = '';
  for (var i = 0; i < files.length; i++) {
    fileListHtml += '<li class="list-group-item">' + files[i].name + '</li>';
  }
  $('#file-list').html(fileListHtml);
}

function loopFiles(){
  $('#download-container').html('');
  $('#instructions').html(instructions['download']);
  geoJsonObjs = [];
  for (var i = 0; i < selectedFiles.length; i++) {
    mergeFiles(selectedFiles[i]);
  }
}

function mergeFiles(file){
    var reader = new FileReader();
    reader.onload = function () {

      var kml = new DOMParser().parseFromString(reader.result, 'text/xml');
      geoJsonObjs.push(toGeoJSON.kml(kml));

      // All files have been read
      if( geoJsonObjs.length >= selectedFiles.length ){
        var mergedGeoJson = merge(geoJsonObjs);
        var mergedKml = tokml(mergedGeoJson);
        var fileName = "mergedKML_" + (new Date()).getTime() + ".kml";

        var blob = new Blob([mergedKml], {type: "text/plain;charset=utf-8"});
        saveAs(blob, fileName);
      }
    };
    reader.readAsText(file);
}




//---------------------------------
//mapbox merge geoJSON functions

var types = {
    Point: 'geometry',
    MultiPoint: 'geometry',
    LineString: 'geometry',
    MultiLineString: 'geometry',
    Polygon: 'geometry',
    MultiPolygon: 'geometry',
    GeometryCollection: 'geometry',
    Feature: 'feature',
    FeatureCollection: 'featurecollection'
};

/**
 * Normalize a GeoJSON feature into a FeatureCollection.
 *
 * @param {object} gj geojson data
 * @returns {object} normalized geojson data
 */
function normalize(gj) {
    if (!gj || !gj.type) return null;
    var type = types[gj.type];
    if (!type) return null;

    if (type === 'geometry') {
        return {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                properties: {},
                geometry: gj
            }]
        };
    } else if (type === 'feature') {
        return {
            type: 'FeatureCollection',
            features: [gj]
        };
    } else if (type === 'featurecollection') {
        return gj;
    }
}



/**
 * Merge a series of GeoJSON objects into one FeatureCollection containing all
 * features in all files.  The objects can be any valid GeoJSON root object,
 * including FeatureCollection, Feature, and Geometry types.
 *
 * @param {Array<Object>} inputs a list of GeoJSON objects of any type
 * @return {Object} a geojson FeatureCollection.
 * * @example
 * var geojsonMerge = require('@mapbox/geojson-merge');
 *
 * var mergedStream = geojsonMerge.merge([
 *   { type: 'Point', coordinates: [0, 1] },
 *   { type: 'Feature', geometry: { type: 'Point', coordinates: [0, 1] }, properties: {} }
 * ]);
 *
 */
function merge (inputs) {
    var output = {
        type: 'FeatureCollection',
        features: []
    };
    for (var i = 0; i < inputs.length; i++) {
        var normalized = normalize(inputs[i]);
        for (var j = 0; j < normalized.features.length; j++) {
            output.features.push(normalized.features[j]);
        }
    }
    return output;
}
