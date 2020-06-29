//Return String from Binary
function binaryAgent(str) {
  return str
    .split(" ") //convert to array to manipulate letter by letter
    .map((x) => String.fromCharCode(parseInt(x, 2))) //convert binary to characters
    .join(""); //join characters to a sentence
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
); //return "Aren't bonfires fun!?"
