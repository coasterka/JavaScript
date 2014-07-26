function findMaxSequence(input) {
    var current = 1;
    var bestLength = 1;
    var bestIndex;
    for (var i = 0; i < input.length; i++) {
		if (input[i] < input[i + 1]) {
            current++;
        }
        else { 
        	if (bestLength < current) {
                bestLength = current;
                bestIndex = i - current + 1;
        	}
        current = 1;
    	}
    }
    return (bestLength < 2) ? console.log("no") : console.log(input.slice(bestIndex, bestIndex + bestLength));
};

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);