var sortArray = function(numArray) {
	var newArray = numArray.sort(
		function(a, b) {
			return a - b;
		}
	);
	return newArray;
};

sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);