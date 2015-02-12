var COWBOYS_FILE = "[\n  " + [
 '{"name": "Tony Romo", "age": 34, "height": 62, "weight": 230, "position": "QB"}',
 '{"name": "Dan Bailey", "age": 27, "height": 60, "weight": 195, "position": "K"}',
 '{"name": "Cole Beasley", "age": 25, "height": 56, "weight": 180, "position": "WR"}',
 '{"name": "Dwayne Harris", "age": 23, "height": 58, "weight": 202, "position": "WR"}',
 '{"name": "Joseph Randle", "age": 23, "height": 60, "weight": 210, "position": "RB"}',
 '{"name": "Demarco Murray", "age": 27, "height": 60, "weight": 217, "position": "RB"}',
 '{"name": "Tyler Patmon", "age": 24, "height": 58, "weight": 185, "position": "CB"}',
 '{"name": "Devin Street", "age": 23, "height": 63, "weight": 200, "position": "WR"}',
 '{"name": "J.J. Wilcox", "age": 23, "height": 60, "weight": 212, "position": "S"}',
 '{"name": "Brandon Carr", "age": 28, "height": 60, "weight": 210, "position": "CB"}',
 '{"name": "Barry Church", "age": 27, "height": 62, "weight": 218, "position": "S"}',
 '{"name": "Bruce Carter", "age": 26, "height": 62, "weight": 240, "position": "LB"}',
 '{"name": "James Anderson", "age": 31, "height": 62, "weight": 235, "position": "LB"}',
 '{"name": "Rondald Leary", "age": 25, "height": 63, "weight": 320, "position": "G"}',
 '{"name": "Donald Hawkins", "age": 22, "height": 64, "weight": 310, "position": "T"}',
 '{"name": "Zack Martin", "age": 24, "height": 64, "weight": 310, "position": "G"}',
 '{"name": "Travis Frederick", "age": 23, "height": 63, "weight": 315, "position": "C"}',
 '{"name": "Tyron Smith", "age": 24, "height": 65, "weight": 320, "position": "T"}',
 '{"name": "James Hanna", "age": 25, "height": 64, "weight": 260, "position": "TE"}',
 '{"name": "Dez Bryant", "age": 26, "height": 62, "weight": 220, "position": "WR"}',
 '{"name": "Gavin Escobar", "age": 24, "height": 66, "weight": 260, "position": "TE"}',
 '{"name": "Josh Brent", "age": 27, "height": 62, "weight": 320, "position": "DT"}',
 '{"name": "Nick Hayden", "age": 29, "height": 64, "weight": 303, "position": "DT"}',
 '{"name": "Tyrone Crawford", "age": 25, "height": 64, "weight": 285, "position": "DE"}',
 '{"name": "George Selvie", "age": 27, "height": 64, "weight": 270, "position": "DE"}',
//this makes sure the data is exported in node.js
//require(./path/to/dallas.js) will get you to the array
].join(",\n  ") + "\n]";

if (typeof module != "undefined" && module.exports)
	module.exports = COWBOYS_FILE;

