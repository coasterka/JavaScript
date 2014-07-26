function findNthDigit(array) {
	var position = array[0];
	var number = array[1];
	var numberStr = number.toString();
	var reversedNum = numberStr.split("").reverse().join("");
	
	if(reversedNum.indexOf('.') > -1) {
		reversedNum = reversedNum.split(".").join("");
	}
	if(reversedNum.length >= position) {
		if(reversedNum.indexOf('.') > -1) {
			reversedNum = reversedNum.split(".").join("");
		}
		if(reversedNum[position-1] == "-") {
			console.log("The digit on position " + position + " is not a number!");
		}
		else {
			console.log(reversedNum[position-1]);
		}
	}
	else {
		console.log("The number doesn’t have " + position + " digits");
	}
	
};

findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);