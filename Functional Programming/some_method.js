//Use the some Method to Check that Any Elements in an Array Meet a Criteria
function checkPositive(arr) {
  // to return true or false with check elements if it is positive
  return arr.some((x) => x > 0);
}
checkPositive([1, 2, 3, -4, 5]);
