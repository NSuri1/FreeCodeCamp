$(document).ready(function(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success, error);
	}

	
});

function success(location){
	console.log("success");
}

function error(msg){
	alert("Error: " + msg);
}