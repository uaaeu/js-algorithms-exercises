//Sort an Array using the sort Method
function alphabeticalOrder(arr) {
    // to sort an array alphabetically
    return arr.sort((a,b) => a === b ? 0 : b < a ? 1 : -1);
    // if we change b < a to a < b it will sort reverse z to a
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]); //returns [ 'a', 'a', 'c', 'd', 'g', 'z' ]
  