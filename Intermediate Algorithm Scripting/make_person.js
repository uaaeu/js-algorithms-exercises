//Make a person with constructors
var Person = function (firstAndLast) {
  let fullName = firstAndLast; // fullName variable declared for storing
  this.getFullName = () => fullName; //constructor to get full name
  this.getFirstName = () => fullName.split(" ")[0]; //constructor to get first name
  this.getLastName = () => fullName.split(" ")[1]; //constructor to get last name
  this.setFullName = (firstAndLast) => (fullName = firstAndLast); //constructor to change full name
  this.setFirstName = (first) =>
    (fullName = first + " " + fullName.split(" ")[1]); //constructor to change first name
  this.setLastName = (last) => (fullName = fullName.split(" ")[0] + " " + last); //constructor to change last name
  return firstAndLast;
};

var bob = new Person("Bob Ross");
bob.getFullName(); //return "Bob Ross"
