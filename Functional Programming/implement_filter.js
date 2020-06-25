// Implement the filter Method on a Prototype
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // for loop for the filter implement
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
//filtered with created myFilter() filter implement
let new_s = s.myFilter((item) => item % 2 === 1);
console.log(new_s); //prints [ 23, 65, 5 ]

//or we can use forEach() method to make a filter implement
Array.prototype.myFilter = function (callback) {
  let newArray = [];
  this.forEach((x) => {
      if(callback(x)) {
          newArray.push(x);
      }
  });
  return newArray;
};
