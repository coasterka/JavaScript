function biggerThanNeighbors(index, array) {
	var previous = array[index - 1];
	var current = array[index];
	var next = array[index + 1];
	var result = "";
	if(index >= array.length) {
		result = "invalid index";
	}
	else if (index === 0 || index === array.length - 1){
		result = "only one neighbor";
	}
	else {
		if (current > previous && current > next) {
			result = "bigger";
		}
		else {
			result = "not bigger";
		}
	}
	console.log(result);
};

biggerThanNeighbors(2, [1, 2, 3, 3, 5]);
biggerThanNeighbors(2, [1, 2, 5, 3, 4]);
biggerThanNeighbors(5, [1, 2, 5, 3, 4]);
biggerThanNeighbors(0, [1, 2, 5, 3, 4]);
