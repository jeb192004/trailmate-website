var geo_maker = document.getElementById('geo_maker');
var coordMain = document.getElementById('in2');



(function($){
	$('#myform').submit(function(e){
        var name = $(this).find('#in').val();
		var coord1 = $(this).find('#in2').val();
		var description1 = $(this).find('#in3').val();
		var cord = coord1.split(",");
		var lat = cord[0];
		var lon = cord[1];
		var lonlat = lon+','+lat;
		var coords;
		if(geo_maker.value == "lon/lat"){
			coords = coord1;
		}else if(geo_maker.value == "lat/lon_lon/lat"){
		  coords = lonlat;
	  }else if(geo_maker.value == "lon/lat_lat/lon"){
		  coords = lonlat ;
	  }else if(geo_maker.value == "lat/lon"){
		  coords = coord1 ;
	  }
	  var type = document.getElementById("type").value;
	  
	  //create list item
        $('ul.list').append('<li>{ "type": "Feature", "properties": { "Name": "' +
		name +'", "Description": "' + description1 + '" }, "geometry": { "type": "' + type + '", "coordinates":['+ coords + ',0.0 ] } }</li>');
       		document.getElementById("myform").reset();
		e.preventDefault();
    });
	
})(jQuery);

document.getElementById("dwn-btn").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
	var optionTexts = [];
$("ul li").each(function() { optionTexts.push($(this).text()) ;});
    var filename = "trails.geojson";
	var geo_begin ='{"type": "FeatureCollection","features": [';
	var geo_end = ']}';
	
	var geojson_file = geo_begin + optionTexts +geo_end;
	download(filename, geojson_file);
},false);

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
 
 function latlonFunction() {
    document.getElementById("myform2").style.display='none';
	document.getElementById("myform").style.display='block';
};

function lonlatFunction() {
    document.getElementById("myform").style.display='none';
	document.getElementById("myform2").style.display='block';
};



geo_maker.onchange = function() {
  if(geo_maker.value == "lon/lat"){
	  document.getElementById('select_explain').innerHTML = "Creates goejson data from lon/lat coordinates";
	 
	  }else if(geo_maker.value == "lat/lon_lon/lat"){
		  document.getElementById('select_explain').innerHTML = "Converts lat/lon to lon/lat before creating goejson data";
		 
	  }else if(geo_maker.value == "lon/lat_lat/lon"){
		  document.getElementById('select_explain').innerHTML = "Converts lon/lat to lat/lon before creating goejson data";
		  
	  }else if(geo_maker.value == "lat/lon"){
		  document.getElementById('select_explain').innerHTML = "Creates goejson data from lat/lon coordinates";
		 
	  }
	  
	};

