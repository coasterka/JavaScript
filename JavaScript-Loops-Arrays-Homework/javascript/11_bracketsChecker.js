function checkBrackets(input) {
	var leftBrackets = 0,
		rightBrackets = 0;
	var result = true;
	for(var i = 0; i < input.length; i++) {
		if (input[i] == "(") {
			leftBrackets++;
		}
		else if (input[i] == ")") {
			rightBrackets++;
		}
		if (leftBrackets === rightBrackets) {
			result = true;
		}
		else {
			result = false;
		}
	}
	if(result) {
		console.log("correct");
	}
	else {
		console.log("incorrect");
	}
};

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');
