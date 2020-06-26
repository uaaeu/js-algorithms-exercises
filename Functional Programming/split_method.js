//Split a String into an Array Using the split Method
let str = "Hello World";
let bySpace = str.split(" "); //split with string
// Sets bySpace to ["Hello", "World"]

let otherString = "How9are7you2today";
let byDigits = otherString.split(/\d/); //
// Sets byDigits to ["How", "are", "you", "today"]

//a split function with regex
function splitify(str) {
  return str.split(/\W/); // regex /\W/ matches any non-word character and its same with /[^A-Za-z0-9]/ 
}
splitify("Hello World,I-am code");
