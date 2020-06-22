//a function that check if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  arr = arr.map((l) => l.toLowerCase());
  const target = Array.from(arr[0]);
  const test = Array.from(arr[1]);
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

// a shorter way...
function mutation(arr) {
    const target = arr[0].toLowerCase();
    const test = arr[1].toLowerCase();
      for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }