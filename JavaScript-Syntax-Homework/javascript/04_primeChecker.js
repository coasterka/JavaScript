var isPrime = function(value) {
	if (isNaN(value) || !isFinite(value) || 
	value%1 || value<2) {
		return false;
	}
	if (value%2==0) {
		return (value==2);
	}
	if (value%3==0) {
		return (value==3);
	}
	var sqrt = Math.sqrt(value);
	for (var i=5; i <= sqrt; i+=6) {
	if (value % i == 0)
		return false;
	if (value % (i + 2) == 0)
		return false;
	}
return true;
};

console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));
console.log(isPrime(11));
console.log(isPrime(23));
console.log(isPrime(78));