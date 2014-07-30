function findLargestBySumOfDigits(nums) {
	
	var result = '';
	var maxSum = 0;
	
	if(arguments.length < 1) {
		result = undefined;		
	}	
	for (var i = 0; i < nums.length; i++) {		
		if (typeof nums[i] == 'string' || nums[i] % 1 !== 0) {			
			result = undefined;			
		}
		else {			
			var num = Math.abs(parseInt(arr[i])).toString();
			var sum = 0;			
			for (var j = 0; j < num.length; j++) {				
				sum += parseInt(num[j]);				
			}			
			if (sum >= maxSum) {				
				result = nums[i];
				maxSum = sum;				
			}			
		}		
	}	
	console.log(result);
}

findLargestBySumOfDigits([5, 10, 15, 111]);
findLargestBySumOfDigits([33, 44, -99, 0, 20]);
findLargestBySumOfDigits(["hello"]);
findLargestBySumOfDigits([5, 3.3]);