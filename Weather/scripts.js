$(document).ready(function(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success);
	}
	else {
		alert("Geolocation is not working. \nPlease try again another time.");
	}

	$(".fahrenheit").attr("disabled", "disabled");

	$(".celcius").on("click", function(){
		$(this).attr("disabled", "disabled");
		$(".fahrenheit").removeAttr("disabled");
		$(".temp").animate({"opacity": 0}, 250, function(){
			$(this).text(kToC(temperatureInKelvin) + "\xB0C");
		});
		$(".temp").animate({"opacity": 1}, 250);
	});

	$(".fahrenheit").on("click", function(){
		$(this).attr("disabled", "disabled");
		$(".celcius").removeAttr("disabled");
		$(".temp").animate({"opacity": 0}, 250, function(){
			$(this).text(kToF(temperatureInKelvin) + "\xB0C");
		});
		$(".temp").animate({"opacity": 1}, 250);
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

		$(".location").text(weather["name"]);
		$(".description").html(weather["weather"][0]["description"].toUpperCase());
		if(200 <= weather["weather"][0]["id"] < 900){
			$(".pic").attr("src", "http://openweathermap.org/img/w/" + weather["weather"][0]["icon"] + ".png");
			$(".pic").show();
		}
		else {
			$(".pic").hide();
		}

		$(".temp").text(kToF(temperatureInKelvin) + "\xB0F");
	});
}

function kToF(temp) {
	return Math.round((temp * 9 / 5) - 459.67);
}

function kToC(temp){
	return Math.round(temp - 273.15);
}
