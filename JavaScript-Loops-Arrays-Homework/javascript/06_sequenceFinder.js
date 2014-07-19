var findMaxSequence = function(input) {
    var start = 0;
    var length = 1;
    var bestStart = 0;
    var bestLength = 1;
    var sequence = [];
    for (var i = 1; i < input.length; i++) {
        if (input[i] === input[i - 1]) {
            start = i;
            length++;
            if (bestLength < length) {
                bestStart = start;
                bestLength = length;
            }
        }
        else {
            length = 1;
        }
    }
    for (var i = 0; i < bestLength; i++) {
    	sequence.push(input[bestStart]);
    }
    console.log(sequence);
};

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);