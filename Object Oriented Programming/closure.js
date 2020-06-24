//Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
  let weight = 15; //private variable

  this.getWeight = () => { //publicly available method that a bird object can use
    return weight;
  };
}

let tweety = new Bird();
tweety.getWeight(); //returns 15
