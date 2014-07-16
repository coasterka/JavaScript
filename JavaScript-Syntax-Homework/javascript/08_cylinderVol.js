var calcCylinderVol = function(radius, height) {
	var pi = Math.PI;
	var volume = 0;
	volume = pi * height * Math.pow(radius, 2);
	console.log(volume.toFixed(3));
	
	//another way of formatting the volume value
	//console.log(Math.round(volume * 1000)/ 1000);
};

calcCylinderVol(2, 4);
calcCylinderVol(5, 8);
calcCylinderVol(12, 3);