//use 'prototype' properties to reduce duplicate code
function Dog(name) {
    this.name = name;
  }

  Dog.prototype.numLegs = 4; //numLegs prototype property is created under Dog constructor 
  
  //created beagle object with the name of "Snoopy"
  let beagle = new Dog("Snoopy"); //beagle object has numLegs prototype properties too.


  //iterate over all properties
  let ownProps = []; //ownProps array is created for store own properties
  let prototypeProps = []; //prototypeProps array is created for store prototype properties
  

  // for in loop to add properties to correct array
  for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownProps.push(property); //it pushes own properties to ownProps array
    } else {
      prototypeProps.push(property); //it pushes prototype properties to prototypeProps array
    }
  } //now ownProps = [ "name" ] and prototypeProps = [ "numLegs" ]


  //set the prototype to a new object that already contains the properties
  //the way that the properties are added all at once
  Dog.prototype = {
    numLegs: 4,
    eat: function() {
      console.log("nohm nohm nohm");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

  //isPrototypeOf method
  Dog.prototype.isPrototypeOf(beagle); //returns true

  //prototype chain
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  //Object is a supertype for all objects in JavaScript (Object>Dog>beagle)
  Object.prototype.isPrototypeOf(Dog.prototype); //returns true