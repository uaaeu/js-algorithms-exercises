//DRY => dont repeat yourrself. between 2nd and 22th lines eat method repeated.
function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
    eat: function() {
      console.log("nom nom nom");
    }
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
    eat: function() {
      console.log("nom nom nom");
    }
  };
  
  //to fix this create a supertype(parent) called Animal that includes eat method
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
      } //eat method created on parent(supertype)
  };

  //so we can write the children more clearly
  Cat.prototype = {
    constructor: Cat,
  };

  Bear.prototype = {
    constructor: Bear,
  };

  //Object.create method to make instances of Animal
  let duck = Object.create(Animal.prototype);
  let beagle = Object.create(Animal.prototype); //created duck and beagle object