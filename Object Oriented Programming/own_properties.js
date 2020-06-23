//Bird constructor defines two properties: name and numLegs
function Bird(name) {
    this.name = name; //name and numlegs are called own properties
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety"); //canary object created with the name of "Tweety"
  let ownProps = []; //empty array is created for store the objects own properties

  //for in loop to push every own properties of canary to ownProps array
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  } //now array become ownProps = [ "name" , "numLegs" ] 
