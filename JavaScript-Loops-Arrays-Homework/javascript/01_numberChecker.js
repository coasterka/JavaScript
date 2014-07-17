var printNumbers = function(n) {
	if(n < 2) {
		return "no";
	}
	else {
		var divisible = [];
		for(var i = 0; i <= n; i++) {
			if((i % 4 != 0) && (i % 5 != 0)) {
				divisible.push(i);
			}
		}
		divisible.splice(0, 1);
		return divisible;
	}
};

printNumbers(20);
printNumbers(1);
printNumbers(13);