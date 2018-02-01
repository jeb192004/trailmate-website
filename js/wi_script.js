
				//document.getElementById('bike').style.color="red";
				//document.getElementById('atv').style.color="lime";
				document.getElementById('utv').style.color="blue";
			
mapboxgl.accessToken = 'pk.eyJ1IjoiamViMTkyMDA0IiwiYSI6ImNpbWNyODZyaDAwMmZ1MWx2dHdzcHQ5M2EifQ.IZsMnB3wOYFIaX1A5sy7Mw';
				var map = new mapboxgl.Map({ container: 'map', style: 'mapbox://styles/mapbox/streets-v9',center:[-90.006236, 44.760861], zoom: 5 });
				
				var utv = 'geojson/wi/wc_roadrunners_atv_utv_club.geojson';
				var utv2 = 'geojson/wi/saratoga_atv_utv_riders_club.geojson';
					map.on('load', function () {
				
				map.addSource('utv', { type: 'geojson', data: utv});
				map.addSource('utv2', { type: 'geojson', data: utv2});
				map.addLayer({"id": "utv","type": "line","source": "utv",
                "layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				map.addLayer({"id": "utv2","type": "line","source": "utv2",
                "layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				}); 
				
				
					
				

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });

				
				
				map.addControl(new mapboxgl.FullscreenControl());
				map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};
function homeFunction() {
    window.location="index.html";
};
function aboutFunction() {
    window.location="About.html";
};
function kmlMergeFunction() {
    window.location="kmlmerger.html";
};
function geoFunction() {
    window.location="lat-lon-convert-geo.html";
};
function geoConvertFunction() {
    window.location="togeojson.html";
};


function legandFunction() {
    var legand = document.getElementById("legand_button");
	var legandbutton = document.getElementById("legand_container");
    legand.style.visibility='hidden';
    legandbutton.style.visibility='visible';
};
function legandFunction2() {
    var legand = document.getElementById("legand_button");
	var legandbutton = document.getElementById("legand_container");
    legand.style.visibility='visible';
    legandbutton.style.visibility='hidden';
};
/**function mapSettingFunction() {
    // Get the snackbar DIV
    var mapsetting = document.getElementById("snackbar");

    // Add the "show" class to DIV
    mapsetting.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ mapsetting.className = mapsetting.className.replace("show", ""); }, 3000);
}**/
function fbFunction() {
    setTimeout(function () { window.location = "https://www.facebook.com/OrvTrailMate/"; }, 25);
	window.location = "fb://page/1731877297109570";
};
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    //if (/windows phone/i.test(userAgent)) {
        //return "Windows Phone";}

    if (/android/i.test(userAgent)) {
        return "Android";
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";}
    return "unknown";
};
function mapSettingFunction(){
	document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
};



function utvFunction(){
	    var utvText = document.getElementById('utv').style.color;
    if (utvText == "blue"){
        document.getElementById('utv').style.color="white";
		map.removeLayer('utv');
		map.removeLayer('utv2');
    }else{
        document.getElementById('utv').style.color="blue";
		map.addLayer({"id": "utv","type": "line","source": "utv",
                "layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				map.addLayer({"id": "utv2","type": "line","source": "utv2",
                "layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
}
};

/*
function orvthFunction(){
	    var orvthText = document.getElementById('orv_th').style.color;
    if (orvthText == "cyan"){
        document.getElementById('orv_th').style.color="white";
		map.removeLayer('orv_th_points');
    }else{
        document.getElementById('orv_th').style.color="cyan";
		map.loadImage('img/parking.jpg',
				function(error, image) {
					if (error) throw error;
					map.addImage('cat', image);
					map.addLayer({ "id": "orv_th_points", "type": "symbol", "source": "orv_trailheads",
									"layout": { "icon-image": "cat", "icon-size": 0.50 } }); });
									
}
};*/
