//constructor property to check constructor name
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);  //prints true
console.log(beagle.constructor === Dog);  //prints true

//Dog constructor function is created for test constructor property
function Dog(name) {
    this.name = name;
  }
  
  //a function to check Dog constructor property
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
  }