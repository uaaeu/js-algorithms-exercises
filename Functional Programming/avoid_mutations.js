//Avoid Mutations and Side Effects Using Functional Programming

// The global variable
var fixedValue = 4;

function incrementer () {
   return fixedValue + 1; //increased without mutated
}

incrementer(); //equal to 5
console.log(fixedValue); //prints 4


//or write function with argument
function incrementer (value) {
  return value + 1;
}

incrementer(fixedValue); //equal to 5