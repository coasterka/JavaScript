var soothsayer = function(input) {
	var years = input[0];
	var languages = input[1];
	var cities = input[2];
	var cars = input[3];
	var money = Math.floor(Math.random()*10000001);
	
	var isLoved = Math.random() < 0.5;
	var isLovedResult;
	
	if(isLoved) {
		isLovedResult = "will love you deeply";
	}
	else {
		isLovedResult = "won't stop cheating on you";
	}
	
	var result = [];
	
	result[0] = years[Math.floor(Math.random()*years.length)];
	result[1] = languages[Math.floor(Math.random()*languages.length)];
	result[2] = cities[Math.floor(Math.random()*cities.length)];
	result[3] = cars[Math.floor(Math.random()*cars.length)];
	result[4] = money;
	result[5] = isLovedResult;
	
	console.log("You will work " + result[0] + " years on " + result[1] + ". You will live in " + result[2] + " and drive " + result[3] + ". You will leave a legacy in the amount of $" + result[4] + ". Your spouse " + isLovedResult + ".");
};

soothsayer([[3, 5, 2, 7, 9], ["Java", "Python", "C#", "JavaScript", "Ruby"], ["Silicon Valley", "London", "Las Vegas", "Paris", "Sofia"], ["BMW", "Audi", "Lada", "Skoda", "Opel"]]);