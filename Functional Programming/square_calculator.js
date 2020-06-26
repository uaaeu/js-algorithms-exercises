//Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
const squareList = (arr) => {
  //using filter and map method to get square of positive integers
  let square = arr
    .filter((x) => x > 0 && Number.isInteger(x))
    .map((x) => x * x);
  return square;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers); //logs [25, 9]

//or in one line..,
const squareOneLine = (arr) => arr.filter((x) => x > 0 && Number.isInteger(x)).map((x) => x * x);
