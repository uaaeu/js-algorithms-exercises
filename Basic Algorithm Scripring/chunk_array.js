//a function that chunks array
function chunkArrayInGroups(arr, size) {
    const newArray = [];
    for (let i = 0; i < arr.length; i += size) { //loop that count by size length
      newArray.push(arr.slice(i, i + size)); //slice array into the length of size to newArray[]
    }
    return newArray;
  }