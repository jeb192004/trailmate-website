

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

function home() {
    window.location="index.html";
};
function kmlMergeFunction() {
    window.location="kmlmerger.html";
};
function geoConvertFunction() {
    window.location="togeojson.html";
};

function facebook() {
    setTimeout(function () { window.location = "https://www.facebook.com/OrvTrailMate/"; }, 20);
	window.location = "fb://page/1731877297109570";
};
function miFunction() {
    window.location="mi.html";
};
function wiFunction() {
    window.location="wi.html";
};
function geoFunction() {
    window.location="lat-lon-convert-geo.html";
}


