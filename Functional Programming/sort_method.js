//Sort an Array using the sort Method
function alphabeticalOrder(arr) {
  // to sort an array alphabetically
  return arr.sort((a, b) => (a === b ? 0 : b < a ? 1 : -1));
  // if we change b < a to a < b it will sort reverse z to a
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]); //returns [ 'a', 'a', 'c', 'd', 'g', 'z' ]

//we can sort numbers as well
function ascendingOrder(arr) {
  return arr.sort((a, b) => a - b ); //or we can sort reverse with .sort((a, b) => b - a)
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]
