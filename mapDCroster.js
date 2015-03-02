//this program will map all the ages of the DCroster into an array and
//print all the players younger than 30
//Eric Heinzman
//3/1/15
//used code from the book 
load('Dallas.js');
//loading the data set
var Dallas = JSON.parse(COWBOYS_FILE);
function map(array, transform) {
//creating a function map and passing it array and transform
	var mapped =  [];
//creating array mapped
	for(var i = 0; i < array.length; i++)

		mapped.push(transform(array[i]));
	return mapped;
}
//this will test to see what players are under thirty years old
var underthirty = Dallas.filter(function(person) {
	return person.age < 30;

});
print(map(underthirty, function(person) {
	return person.name;
}));
 
