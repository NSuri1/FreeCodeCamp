$(document).ready(function(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success, error);
	}

	$(".fahrenheit").attr("disabled", "disabled");

	$(".celcius").on("click", function(){
		$(".celcius").attr("disabled", "disabled");
		$(".fahrenheit").removeAttr("disabled");
		$(".temp").text(kToC(temperatureInKelvin) + "\xB0");
	});

	$(".fahrenheit").on("click", function(){
		$(".fahrenheit").attr("disabled", "disabled");
		$(".celcius").removeAttr("disabled");
		$(".temp").text(kToF(temperatureInKelvin) + "\xB0");
	});
	
});

var temperatureInKelvin = 0;

function success(location){
	var lat = location.coords.latitude;
	var long = location.coords.longitude;
	var jsonLocation = "http://api.openweathermap.org/data/2.5/weather";
	var data = {
		"lat": lat,
		"lon": long,
		"APPID": "e34a9855fd2a7c8af5f930144984b5c1"
	}

	$.getJSON(jsonLocation, data, function(weather){
		temperatureInKelvin = weather["main"]["temp"];
		var temp = temperatureInKelvin;
		var weatherMain = weather["weather"][0];
		$(".location").text(weather["name"]);
		$(".pic").attr("src", "http://openweathermap.org/img/w/" + weatherMain["icon"] + ".png");
		
		$(".temp").text(kToF(temperatureInKelvin) + "\xB0")
		$(".description").html(weatherMain["description"]);
	});
}

function error(msg){
	alert("Error in getting current location. \nMiami's weather will be displayed");
	$(".location").text("Miami, FL");
}

function kToF(temp) {
	return Math.round((temp * 9 / 5) - 459.67);
}

function kToC(temp){
	return Math.round(temp - 273.15);
}