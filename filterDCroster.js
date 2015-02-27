//Eric Heinzman
//filter function for Dallas Cowboys roster 
//this program will print all players less than 200lbs 
//2/26/15

load('Dallas.js');
//loading the dataset file
var Dallas = JSON.parse(COWBOYS_FILE);
//translating the json file so it is more readable

function filter(array, test) {
//filter function passing it test and array
  var passed = [];
//creating variable passes and new array
  for (var i = 0; i < array.length; i++) 
//for i is = to 0 and i is less than array length increment i
 {
    if (test(array[i]))
//testting i in array
      passed.push(array[i]);
//pushing onto the array
  }
  return passed;
}


// This finds the players whose weight is under 200lbs 
print(JSON.stringify(filter(Dallas, function(player) {
  return player.weight < 200;
})));


