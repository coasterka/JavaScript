function countSubstringOccur(input) {
	var keyword = input[0];
	var text = input[1].toString().toLowerCase().split(" ");
	var counter = 0;
	for (var i = 0; i < text.length; i++) {
		var currentWord = text[i];
		if(currentWord.indexOf(keyword) > - 1) {
			counter++;
		}
	}
	console.log(counter);
}

countSubstringOccur(["in", "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]);
countSubstringOccur(["your", "No one heard a single word you said. They should have seen it in your eyes. What was going around your head."]);
countSubstringOccur(["but", "But you were living in another world tryin' to get your message through."]);