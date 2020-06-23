//DRY => dont repeat yourrself. between 2nd and 22th lines eat method repeated.
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function () {
    console.log("nom nom nom");
  },
};

//to fix this create a supertype(parent) called Animal that includes eat method
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  }, //eat method created on parent(supertype)
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

//set the child's prototype to an instance of the parent
function Dog() {}

Dog.prototype = Object.create(Animal.prototype); //that instances of Dog inherit from Animal.

let beagle = new Dog();
beagle.eat(); //prints "nom nom nom"

//reset an inherited constructor property
function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype); //when we inherit like this duck and beagle constructor is set to Animal

//to fox this we need to redefine constructor
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();//now duck and beagle.constructor is re set

duck.constructor; //[Function: Bird]
beagle.constructor; //[Function: Dog]
