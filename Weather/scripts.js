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
			$(this).text(toC(temperature) + "\xB0C");
		});
		$(".temp").animate({"opacity": 1}, 250);
	});

	$(".fahrenheit").on("click", function(){
		$(this).attr("disabled", "disabled");
		$(".celcius").removeAttr("disabled");
		$(".temp").animate({"opacity": 0}, 250, function(){
			$(this).text(toF(temperature) + "\xB0F");
		});
		$(".temp").animate({"opacity": 1}, 250);
	});
	
});

var temperature = 0;

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

	$.getJSON(weatherJSONLocation, function(weather){
		temperature= Math.round(weather["currently"]["temperature"]);
		$(".description").html(weather["currently"]["summary"].toUpperCase());
		$(".temp").text(temperature + "\xB0F");
	}, function(err){
		alert("Error in getting weather");
	});
}

function toF(temp) {
	temperature = Math.round((temp * 9 / 5) + 32);
	return temperature;
}

function toC(temp){
	temperature = Math.round((temp - 32) * 5 / 9);
	return temperature;
}