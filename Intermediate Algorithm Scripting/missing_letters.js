//Missing Letters
function fearNotLetter(str) {
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) { //check the char codes to check alphabetic order
      let missing = String.fromCharCode(str.charCodeAt(i) - 1); //if the order is broken find the missing word
        //str.slice(0, i) + missing + str.slice(i)); if we add this line to code function will return 'abcde'
    }
  }
}

fearNotLetter("abce"); //return "d"

