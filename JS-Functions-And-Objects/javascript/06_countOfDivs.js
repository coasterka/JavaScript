function countDivs(input) {
	
	input = input.toString().toLowerCase();
	var counter = 0;
	
	for(var i = 0; i < input.length; i++) {
		
		var currentChar = input.indexOf("<div", i);
		if (currentChar > -1) {
			counter++;
			i = currentChar + 1;
		}
	}
	
	console.log(counter);
};

countDivs('<!DOCTYPE html><html><head lang="en"><meta charset="UTF-8"><title>index</title><script src="/yourScript.js" defer></script></head><body><div id="outerDiv"><div class="first"><div><div>hello</div></div></div><div>hi<div></div></div><div>I am a div</div></div></body></html>');