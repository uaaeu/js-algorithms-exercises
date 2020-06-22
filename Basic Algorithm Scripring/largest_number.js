//Return Largest Numbers in Arrays with for loop.

function largestOfFour(arr) {
  let result = [-1000, -1000, -1000, -1000];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > result[i]) {
        result[i] = arr[i][j];
      }
    }
  }
  return result;
}

// or its like that with .sort method...

function largestOfFour(arr) {
  let result = [0, 0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].sort((a, b) => b - a);
    result[i] = sorted[0];
  }
  return result;
}

// .sort with .push method...

function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].sort((a, b) => b - a);
    result.push(sorted[0]);
  }
  return result;
}
