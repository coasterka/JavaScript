var checkDigit = function(number) {
	var numStr = number.toString();
	var numLength = numStr.length;
	var digit = numStr[numLength - 3];
	if(digit == 3) {
		console.log("true");
	}
	else {
		console.log("false");
	}
};

checkDigit(1235);
checkDigit(25368);
checkDigit(123456);