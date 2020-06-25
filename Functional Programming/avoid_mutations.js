//Avoid Mutations and Side Effects Using Functional Programming

// The global variable
var fixedValue = 4;

function incrementer() {
  let incremented = fixedValue + 1; //created a new variable to avoid mutation
  return incremented;
}

incrementer(); //equal to 5

//or just return the value
function incrementer() {
  return fixedValue + 1; //increased without mutated
}

incrementer(); //equal to 5
console.log(fixedValue); //prints 4


//or write function with argument (better way)
function incrementer(value) {
  return value + 1;
}

incrementer(fixedValue); //equal to 5
