var convertKWtoHP = function(kW) {
	var horsePower = kW / 0.745699872;
	return horsePower.toFixed(2);
};

console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));