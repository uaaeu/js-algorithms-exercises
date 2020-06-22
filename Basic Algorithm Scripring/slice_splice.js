//a function that copy each element of the first array into the second array, in order
function frankenSplice(arr1, arr2, n) {
    let newArr = [arr2.slice()]; // new array for input arrays remain the same after the function runs.
    newArr.splice(n, 0, ...arr1); //inserting elements at index n of the second array.
    return newArr;
  }