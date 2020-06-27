//Compare two arrays to find the items that not includes both
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2) //adding two arrays with concat method to compare with original ones
    .filter((x) => !arr1.includes(x) || !arr2.includes(x)); //filtered to find unique one
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); //returns [4]
