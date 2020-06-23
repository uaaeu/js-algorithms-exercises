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

  //when manually setting the prototype to a new object it erases the constructor property
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    constructor: Dog, //to fix this we need to define constructor property
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  