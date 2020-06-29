//Arguments Optional
function addTogether(x, y) {
  if (Number.isInteger(x && y)) { //if both arguments is number
    return x + y; //return sum of x and y
  }
  if (arguments.length === 1 && Number.isInteger(x)) { //if there is one argument and its integer
    return function (y) { //return function
      if (Number.isInteger(y)) { //if y in return function is number
        return x + y; // return sum of x and y
      }
    };
  }
  return undefined;
}

//or a shorter way with typeof
function addTogether(x, y) {
    const sum = y => typeof y === 'number' ? x + y : undefined; //a function that checks if y is number then sum x and y if its not return undefined
    return typeof x === 'number' ? typeof y === "undefined" ? y => sum(y) : sum(y) : undefined; 
  } //if x is a number and y is not undefined return sum(y) fucntion to sum

console.log(addTogether(2, 3)); //return 5
console.log(addTogether(2)); //return [function]
console.log(addTogether(2, [3])); //return undefined
console.log(addTogether(2, "3")); //return undefined
console.log(addTogether(2)(3)); //return 5 using of return function
