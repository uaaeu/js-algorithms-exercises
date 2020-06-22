//a function that removes all falsy values from an array
function bouncer(arr) {
  let newArr = [];
  for (let value of arr) {
    if (!value == false) { // confusing use of '!' but it works
      newArr.push(value);
    }
  }
  return newArr;
}

//with .filer method
function bouncer(arr) {
    return arr.filter(Boolean);
  }

// with for loop
function bouncer(arr) {
    let newArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
  }