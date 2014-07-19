var createArray = function() {
	var numArray = new Array(20);
	for(var i = 0; i < numArray.length; i++) {
		numArray[i] = i * 5;
	}
	console.log(numArray);
};

createArray();