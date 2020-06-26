//Currying and Partial Application
function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
add(10)(20)(30); //returns 60

//or es6 version with arrow functions
function add(x) {
  return (y) => (z) => x + y + z;
}
add(10)(20)(30);
