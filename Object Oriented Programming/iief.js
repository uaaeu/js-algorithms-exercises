//Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("A cozy nest is ready");
  })(); //an anonymous function expression that executes right away
  
  (() => {
    console.log("A cozy nest is ready");
  })(); //this is the arrow function type of iief

  //both outputs "A cozy nest is ready" immedietly

  //Use an IIFE to Create a Module
  let funModule = ( () => {
    return {
      isCuteMixin: (obj) => {
        obj.isCute = () => {
          return true;
        };
      },
      singMixin: (obj) => {
        obj.sing = () => {
          console.log("Singing to an awesome tune");
        };
      }
    }
  })();