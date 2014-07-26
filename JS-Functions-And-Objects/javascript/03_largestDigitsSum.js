function findLargestBySumOfDigits(nums) {
	
	var result;
	var current = 0;
	var sumOfDigits = 0;
	var numberArr = [];
	
	//if the input contains 0 elements
	if (arguments.length < 1) {
		result = undefined;
	}
	else {
		//check for wrong input
		for (var i = 0; i < nums.length; i++) {
			if (typeof(nums[i]) == "string") {
				//result = undefined;
				result = "some of the input elements is a string";
				break;
			}
			else if (isFloat(nums[i])) {
				//result = undefined;
				result = "some of the input elements is a float";
				break;
			}
			//if the input is correct
			else {
				
				numberArr.push(nums[i]);
				
			}
			
		}
		console.log(numberArr);
	}
	//console.log(result);
};

//check if some of the input elements is a floating point number
function isFloat(number) {
	
   return number % 1 !== 0;
   
};

findLargestBySumOfDigits([5, 10, 15, 111]);
findLargestBySumOfDigits([33, 44, -99, 0, 20]);
findLargestBySumOfDigits(["hello"]);
findLargestBySumOfDigits([5, 3.3]);
