var bitChecker = function(value) {
	var moveBits = Number(value) >> 3;
	var binary = moveBits.toString(2);
	var bit = binary & 1;
	var result;
	
	if (bit === 1) {
		result = true;
	}
	else {
		result = false;
	}
	console.log(result);
};

bitChecker(333);
bitChecker(425);
bitChecker(2567564754);