// Implement map on a Prototype
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  var newArray = [];
  // for loop for the map implement
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
};

var new_s = s.myMap; //new_s become s array

//or we can use forEach() method to map implement
Array.prototype.myMap = function (callback) {
  var newArray = [];
  this.forEach((a) => newArray.push(callback(a)));
  return newArray;
};
