Array.prototype.removeItem = function removeItem(input) {
	
	for (var i = 0; i < this.length; i++) {
		var index = this.indexOf(input);
		if (index > -1) {
			this.splice(index, 1);
		}
	}
	return this;
};

var arr1 = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arr1.removeItem(1);

var arr2 = ['hi', 'bye', 'hello'];
arr2.removeItem('bye');