//Sum All Numbers in a Range
function sumAll(arr) {
  let asc = arr.sort((a, b) => a - b); //sorting elements for the sum formula
  let sum = ((asc[0] + asc[1]) * (asc[1] - asc[0] + 1)) / 2; //formula of the sum numbers in a range
  return sum;
}

sumAll([1, 4]); //returns 10

//with Math.abs method to not need sorting
function sumRange(arr) {
  let count = Math.abs(arr[0] - arr[1]) + 1; //it gets the count between numbers
  let sum = ((arr[0] + arr[1]) * count) / 2; //sum of the numbers in a range formula
  return sum;
}

sumRange([1, 4]); //returns 10
