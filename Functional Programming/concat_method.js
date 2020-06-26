//Combine Two Arrays Using the concat Method
function nonMutatingConcat(original, attach) {
  //combine two strings or arrays with concat method
  return original.concat(attach); //it returns with combining original and attach arguments
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second); //returns [1, 2, 3, 4, 5]
