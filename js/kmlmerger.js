var selectedFiles = [];
var geoJsonObjs = [];
var instructions = {
  'start': "Select 2 or more KML files to merge into a single layer.",
  'merge': "If you selected the correct files, click Merge and Download",
  'download': "Click Download to get your file.  Or Select Files to start again.",
};




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
        var fileName = "gogebic" + ".kml";

        var blob = new Blob([mergedKml], {type: "text/plain;charset=utf-8"});
        saveAs(blob, fileName);
		//saveFile(fileName, "data:attachment/text", mergedKml);
      }
    };
    reader.readAsText(file);
}

function saveFile (name, type, data) {
    if (data != null && navigator.msSaveBlob)
        return navigator.msSaveBlob(new Blob([data], { type: type }), name);
    var a = $("<a style='display: none;'/>");
    var url = window.URL.createObjectURL(new Blob([data], {type: type}));
    a.attr("href", url);
    a.attr("download", name);
    $("body").append(a);
    a[0].click();
    window.URL.revokeObjectURL(url);
    a.remove();
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


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

function miFunction() {
    window.location="mi.html";
};
function wiFunction() {
    window.location="wi.html";
};
function aboutFunction() {
    window.location="About.html";
};
function homeFunction() {
    window.location="index.html";
};
function geoFunction() {
    window.location="lat-lon-convert-geo.html";
};
function fbFunction() {
    setTimeout(function () { window.location = "https://www.facebook.com/OrvTrailMate/"; }, 25);
	window.location = "fb://page/1731877297109570";
};
function geoConvertFunction() {
    window.location="togeojson.html";
};



