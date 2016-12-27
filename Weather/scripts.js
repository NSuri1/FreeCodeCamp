$(document).ready(function(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success, error);
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
		$(".temp").text(kToF(temperatureInKelvin) + "\xB0F");

		var id = weather["weather"][0]["id"];	
		setBackground(id);
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

function setBackground(id){
		if(200 <= id < 300){
		} 
		else if (300 <= id < 400){
		}
		else if (500 <= id < 600){
		}
		else if (600 <= id < 700){
		}
		else if (700 <= id < 800){
		}
		else if (800 <= id < 900){
			switch(id){
				case 800:
				break;
				case 801:
				break;
				case 802:
				break;
				case 803:
				break;
				case 804:
				break;
				default:
			}
		}
		else if (900 <= id < 910){
			switch(id){
				case 900:
				break;
				case 901:
				break;
				case 902:
				break;
				case 903:
				break;
				case 904:
				break;
				case 905:
				break;
				case 906:
				break;
				default:
			}
		}	
		else {
			switch(id){
				case 951:
				break;
				case 952:
				break;
				case 953:
				break;
				case 954:
				break;
				case 955:
				break;
				case 956:
				break;
				case 957:
				break;
				case 958:
				break;
				case 959:
				break;
				case 960:
				break;
				case 961:
				break;
				case 962:
				break;
				default:
			}
		}
}