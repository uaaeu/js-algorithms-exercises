//Srted Union
const uniteUnique = (...arr) => [...new Set([].concat(...arr))];
//gets all arrays and set the uniques to a new string with concat 

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //return [1, 3, 2, 5, 4]