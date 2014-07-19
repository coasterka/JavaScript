var compareChars = function(firstArray, secondArray) {
	
	if(firstArray.length != secondArray.length) {
		console.log("Not Equal");
	}
	else {
		for(var i = 0; i < firstArray.length; i++) {
			if(firstArray[i] == secondArray[i]){
				console.log("Equal");
				break;
			}
			else {
				console.log("Not Equal");
				break;
			}
		}
	}
};

compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);
