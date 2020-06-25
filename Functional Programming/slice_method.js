//Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
  //return part of an array with the begin index and end index
  return anim.slice(beginSlice, endSlice); //end index is non-inclusive
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3); //returns ["Dog", "Tiger"]