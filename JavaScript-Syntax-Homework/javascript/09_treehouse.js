var treeHouseCompare = function(a, b) {
	
	var houseArea = 0;
	
	var squareArea = Math.pow(a, 2);
	var triangleHeight = a - 1;
	var triangleArea = (a * triangleHeight) / 2;
	
	houseArea = squareArea + triangleArea;
	
	var treeArea = 0;
	
	var rectA = b / 3;
	var rectArea = rectA * b;
	
	var pi = Math.PI;
	var radius = b / 1.5;
	var circleArea = pi * Math.pow(radius, 2);
	
	treeArea = rectArea + circleArea;
	
	if (houseArea > treeArea) {
		console.log("house/" + houseArea.toFixed(2));
	}
	else {
		console.log("tree/" + treeArea.toFixed(2));
	}
};

treeHouseCompare(3, 2);
treeHouseCompare(3, 3);
treeHouseCompare(4, 5);