//a function that capitalize first letter of each word and lower case the rest of the word
function titleCase(str) {
    let capitalized = [];
    let array = str.toLowerCase().split(' ');
    for (let word of array) {
      capitalized.push(word[0].toUpperCase() + word.slice(1));
    }
    console.log(capitalized.join(' '));
    return capitalized.join(' ');
  }