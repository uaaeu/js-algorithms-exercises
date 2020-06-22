// a function to get index of inserted value from sorted array
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  let numIndex = arr.indexOf(num);
  return numIndex;
}
