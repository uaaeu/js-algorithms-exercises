//Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("A cozy nest is ready");
  })(); //an anonymous function expression that executes right away
  
  (() => {
    console.log("A cozy nest is ready");
  })(); //this is the arrow function type of iief

  //both outputs "A cozy nest is ready" immedietly