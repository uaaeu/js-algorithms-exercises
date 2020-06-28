//Drop It
function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) { //check the elements in array which one is return true at first
      return arr.slice(i); //after the first true slice array with that index
    }
  }
  return []; //if the function returns false through the array, an empty array will return
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
}); //return [1, 2, 3]
