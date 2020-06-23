//constructors are functions that create new objects and they define properties and behaviors
function Dog() {
  //constructors are defined with a capitalized name to distinguish from other functions
  this.name = "Whitey"; //constructors use the keyword 'this' to set properties
  this.color = "black";
  this.numLegs = 4;
}
//use a constructor to create object
let hound = new Dog(); //'new' operator used Dog constructor to create a new instance of Dog

hound.name = "Dark"; //properties can be modified like this

//extend constructors to receive arguments
function Dog(name, color) {
  //it will accept name and color properties to set
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Terry", "brown"); //this created a terrier object with the name of "Terry", the color of "brown" and the cardinal numLegs that is defined.

//verify an object's constructor with "instanceof" operator
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  let myHouse = new House(3);
  myHouse instanceof House; //it returns "true" if its created with using a constructor and returns "false" if its not
  