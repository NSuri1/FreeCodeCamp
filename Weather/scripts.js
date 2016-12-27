$(document).ready(function(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success, error);
	}

	
});

var temp = 0;

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
		temp = weather["main"]["temp"];
		$(".location").text(weather["name"]);
		$(".pic").attr("src", "http://openweathermap.org/img/w/" + weather["weather"]["icon"] + ".png");
		$(".temp").text(temp + "\xB0")
		$(".description").html(weather["weather"]["description"]);
	});
}

function error(msg){
	alert("Error in getting current location. \nMiami's weather will be displayed");
	$(".location").text("Miami, FL");
}