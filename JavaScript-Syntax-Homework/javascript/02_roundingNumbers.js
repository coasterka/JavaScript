var roundNumber = function(value) {
	var result = {Floored: Math.floor(value), Rounded: Math.round(value)};
	return result;
};

console.log(roundNumber(22.7));
console.log(roundNumber(12.3));
console.log(roundNumber(58.7));