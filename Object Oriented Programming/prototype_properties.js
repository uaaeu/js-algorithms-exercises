//use 'prototype' properties to reduce duplicate code
function Dog(name) {
    this.name = name;
  }

  Dog.prototype.numLegs = 4; //numLegs prototype property is created under Dog constructor 
  
  //created beagle object with the name of "Snoopy"
  let beagle = new Dog("Snoopy"); //beagle object has numLegs prototype properties too.




  //iterate over all properties
  function Dog(name) {
    this.name = name; //own property
  }
  
  Dog.prototype.numLegs = 4; //prototype property
  
  let beagle = new Dog("Snoopy"); //created beagle object with Dog constructor
  
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
  function Dog(name) {
    this.name = name;
  }
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
  function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  //using the isPrototypeOf method to check the prototype of beagle
  Dog.prototype.isPrototypeOf(beagle); //returns true