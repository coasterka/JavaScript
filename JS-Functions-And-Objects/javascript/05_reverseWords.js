function reverseWordsInString(str) {
	var wordArray = str.split(" ");
	var currentWord = "";
	var reversed = "";
	for(var i = 0; i < wordArray.length; i++) {
		currentWord = " " + wordArray[i];
		for(var j = currentWord.length - 1; j >= 0; j--) {
			reversed += currentWord[j];
		}
	}
	var result = reversed.slice(0, -1);
	console.log(result);
};

reverseWordsInString("Hello, how are you.");
reverseWordsInString("Life is pretty good, isn’t it?");
