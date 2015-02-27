//Eric Heinzman
//this program will take the 25 dallas cowboys players and find the oldest one
//2/26/15

load('Dallas.js');
var Dallas = JSON.parse(COWBOYS_FILE);


var avg = 0;

//find the oldest player on the roster 
print(JSON.stringify(Dallas.reduce(function(max,cur) {
 return (cur.age > max.age)? cur : max;

})));

