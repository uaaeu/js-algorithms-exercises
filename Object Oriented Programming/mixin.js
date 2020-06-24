//Use a Mixin to Add Common Behavior Between Unrelated Objects
const bird = {
    name: "Donald",
    numLegs: 2
  };
  
  const boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  const glideMixin = (obj) => { //a mixin allows other objects to use a collection of functions
    obj.glide = () => {
      console.log("gliding");
    };
  }; //the glideMixin takes any object and give and gives it to glide method
 
 
  glideMixin(bird); //bird and boat are passed into glideMixin
  glideMixin(boat); //glideMixin assings the glide function to each object
  //now the bird and boat can both glide
  
  bird.glide(); //prints "gliding"
  boat.glide(); //prints "gliding"