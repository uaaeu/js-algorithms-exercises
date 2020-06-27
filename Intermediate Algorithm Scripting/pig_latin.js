//Translate the provided string to Pig Latin
function translatePigLatin(str) {
  if (/^[aeiou]/.test(str)) {
    return (str += "way");
  } else if (/^[^aeiou]+$/.test(str)) {
    return (str += "ay");
  } else {
    return str.replace(/([^aeiou]+)(\w+)/, "$2$1ay");
  }
}

translatePigLatin("consonant"); //return "onsonantcay"

//shorter way with replace method and regex
function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way") //add 'way' to and if string starts with vowel
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay"); //grouped consonanat characters at the begining replace it to theend of string with 'ay'
}

console.log(translatePigLatin("consonant"));
