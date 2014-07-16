var variablesTypes = function(value) {
	var name = value[0];
	var age = value[1];
	var isMale = value[2];
	var foods = value[3];
	console.log("\"My name: " + name + " //type is " + typeof name + "\n" +
	"My age: " + age + " //type is " + typeof age + "\n" +
	"I am male: " + isMale + " //type is " + typeof isMale + "\n" +
	"My favorite foods are: " + foods + " //type is " + typeof foods + "\"");
};

variablesTypes(['Peshka', 21, false, ['pizza', 'grapefruit', 'cherries']]);