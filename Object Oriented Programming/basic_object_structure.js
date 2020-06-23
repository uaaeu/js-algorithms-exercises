//basic js object structure
let dog = {
  //dog is the name of the object
  name: "whitey", //name and numLegs are properties of this object
  numLegs: 4, //comma ',' must used between the properties
  sayLegs: () => "This dog has " + dog.numLegs + " legs.", //using arrow function to create a method on an object
  sayName: function () {
    return `The name of this dog is ${this.name}.`; //we can use 'this' keyword for object name 
  }, //also can use function directly with temlate string `${}`
};

//dot notation to access the properties of an object
console.log(dog.name);
console.log(dog.numLegs);
//dot notation to call object methods
dog.sayLegs();
dog.sayName();
