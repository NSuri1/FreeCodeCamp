//Varible declarations
var temperature = 0;
var conditions = {
	"clear-day": "clear_day.jpg",
	"clear-night": "clear_night.jpg",
	"rain": "rain.jpg",
	"snow":"snow.jpg",
	"sleet": "snow.jpg",
	"wind": "windy.jpg",
	"fog": "fog.jpg",
	"cloudy": "cloudy.jpg",
	"partly-cloudy-day": "partly_cloudy.jpg",
	"partly-cloudy-night": "partly_cloudy.jpg",
	"default": "partly_cloudy.jpg"
}

//Check if support geolocator
if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(success);
}
else {
	alert("Geolocation is not working. \nPlease try again another time.");
}

//Things to do when page has loaded
$(document).ready(function(){
	$(".fahrenheit").attr("disabled", "disabled");

	$(".celcius").on("click", function(){
		$(this).attr("disabled", "disabled");
		$(".fahrenheit").removeAttr("disabled");
		$(".temp").animate({"opacity": 0}, 250, function(){
			$(this).text(toC(temperature) + "\xB0C");
		});
		$(".temp").animate({"opacity": 1}, 250);
	});

	$(".fahrenheit").on("click", function(){
		$(this).attr("disabled", "disabled");
		$(".celcius").removeAttr("disabled");
		$(".temp").animate({"opacity": 0}, 250, function(){
			$(this).text(temperature + "\xB0F");
		});
		$(".temp").animate({"opacity": 1}, 250);
	});
	
});

//function definitions

function success(location){
	var lat = location.coords.latitude;
	var long = location.coords.longitude;

	var cityJSONLocation = " https://www.geocode.farm/v3/json/reverse/?lat=" + lat + "&lon=" + long;

	$.getJSON(cityJSONLocation, function(city){
		$(".location").text(city["geocoding_results"]["RESULTS"][1]["ADDRESS"]["locality"]);
	}, function(err){
		$(".location").text("Weather Conditions Outside");
	});

	var weatherJSONLocation = "https://api.darksky.net/forecast/b1be7136a4865d4047669e491bd0e2b8/"+ lat + "," + long;

	$.ajax({
        url: "https://api.darksky.net/forecast/b1be7136a4865d4047669e491bd0e2b8/"+ lat + "," + long,
      	dataType: 'jsonp',
       	success: function(weather){
       		temperature= Math.round(weather["currently"]["temperature"]);
			$(".description").html(weather["currently"]["summary"].toUpperCase());
			$(".temp").text(temperature + "\xB0F");

			changeBackground(weather["currently"]["icon"]);
	    },
	    error: function(err){
	    	alert("Error!");
	    }
    });
}

function toC(temp){
	return Math.round((temp - 32) * 5 / 9);
}

function changeBackground(icon){
	var iconPath;

	if (conditions[icon]){
		iconPath = conditions[icon];
	}
	else{
		iconPath = conditions["default"];
	}

	$(".background").hide(1000, function(){
			$(this).attr("src", iconPath);
		}).show(1000);
}