var displayProperties = function() {
	
	var propArray = Object.getOwnPropertyNames(document);
	
	propArray.sort(
		function(a, b) {
			if (a.toLowerCase() < b.toLowerCase()) return -1;
			if (a.toLowerCase() > b.toLowerCase()) return 1;
			return 0;
		}
	);
	
	console.log(propArray);
	
};

displayProperties();