var reverseString = function(input) {
	var reversed = "";
	for(var i = input.length - 1; i >= 0 ; i--) {
		reversed += input[i];
	}
	console.log(reversed);
};

reverseString('sample');
reverseString('softUni');
reverseString('java script');