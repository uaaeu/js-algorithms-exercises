//Refactor Global Variables Out of Functions
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// add function with two parameters original bookList and bookName which gonna add
function add (bookList, bookName) {
  let addedList = [...bookList]; //bookList cloned a new array to not change the original one
  addedList.push(bookName);
  return addedList; //return new changed array
}

// remove function that takes two parameters too.
function remove (bookList, bookName) {
  var book_index = bookList.indexOf(bookName); //getting index of the book name that will be delete
  if (book_index >= 0) {
    let removedList = [...bookList]; //created new list which is the clone of the original bookList
    removedList.splice(book_index, 1); //removed the book if its exist
    return removedList; //return new changed array
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList); //prints original one
console.log(newBookList); //prints added one
console.log(newerBookList); //prints removed one
console.log(newestBookList); //prints removed and added one