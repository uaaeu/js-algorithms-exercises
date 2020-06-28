//Flatten Nested Arrays
function steamrollArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr = [].concat.apply([], arr); //flat arrays with loop
  }
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]); //return [1, 2, 3, 4]

//Shorter way
function steamrollArray(arr) {
  arr = [].concat(...arr); //to flat array one degree
  return arr.some((x) => Array.isArray(x)) ? steamrollArray(arr) : arr; //check if array in array to flat again
}

steamrollArray([1, [2], [3, [[4]]]]); //return [1, 2, 3, 4]