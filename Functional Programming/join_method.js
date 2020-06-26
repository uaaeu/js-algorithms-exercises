//Combine an Array into a String Using the join Method
function sentensify(str) {
  // first we split string to array with regex it becomes ["May", "the", "force", "be", "with", "you"]
  return str.split(/\W/).join(" ");
  // after split we use join method to join splitted array into string with space (" ")
}
sentensify("May-the-force-be-with-you"); // returns "May the force be with you"
