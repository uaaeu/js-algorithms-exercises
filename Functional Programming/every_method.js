//Use the every Method to Check that Every Element in an Array Meets a Criteria
function checkPositive(arr) {
  // to return true or false with check every element if it is positive
  return arr.every((x) => x > 0);
}
checkPositive([1, 2, 3, -4, 5]); // returns false because of -4
