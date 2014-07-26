function findMostFreqNum(numberArr) {
	
	var sortedArr = [];
	
	for (var i = 0; i < numberArr.length - 1; i++) {
		var min = i; 
		for (var j = i + 1; j < numberArr.length; j++) {
			if (numberArr[j] < numberArr[min]) {
				min = j;
			}
		}
		if (min != i) {
			var temp = 0;
			temp = numberArr[i];
			numberArr[i] = numberArr[min];
			numberArr[min] = temp;
		}
	}
	
	for (var i = 0; i < numberArr.length; i++) {
		sortedArr.push(numberArr[i]);
	}
	
	var mostFrequent = sortedArr[0];
	var currentSequence = 1;
	var maxSequence = 1;
	
	for (var i = 0; i < sortedArr.length - 1; i++) {
		if (sortedArr[i] == sortedArr[i+1]) {
			currentSequence++;
			if (maxSequence <= currentSequence) {
				maxSequence = currentSequence;
				mostFrequent = sortedArr[i];
			}
		}
		else {
			currentSequence = 1;
		}
	}
	
	console.log(mostFrequent + " (" + maxSequence + " times)");
};

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
