//remove all given elements from an array
const destroyer = (arr, ...val) => arr.filter((x) => !val.includes(x));

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
