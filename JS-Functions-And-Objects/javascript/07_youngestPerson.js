function findYoungestPerson(persons) {
	var sortedAges = _.sortBy(persons, 'age');
	console.log("The youngest person is " + sortedAges[0].firstname + " " + sortedAges[0].lastname);
}

var first = [
  { firstname : 'George', lastname: 'Kolev', age: 32}, 
  { firstname : 'Bay', lastname: 'Ivan', age: 81},
  { firstname : 'Baba', lastname: 'Ginka', age: 40}];
  
var second = [
  { firstname : 'Pesho', lastname: 'Peshov', age: 19}, 
  { firstname : 'Gosho', lastname: 'Goshov', age: 3}];
  
var third = [
  { firstname : 'Ani', lastname: 'Peshova', age: 29}, 
  { firstname : 'Beti', lastname: 'Goshova', age: 13},
  { firstname : 'Kirka', lastname: 'Ginkova', age: 48},
  { firstname : 'Ivan', lastname: 'Draganov', age: 35},
  { firstname : 'Dragan', lastname: 'Penkov', age: 14}];
  
findYoungestPerson(first);
findYoungestPerson(second);
findYoungestPerson(third);