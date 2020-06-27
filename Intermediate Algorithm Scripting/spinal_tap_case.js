//Spinal Tap Case
function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") //to insert space between camelCase words
    .replace(/\s+|_+/g, "-") //to replace whitespaces and underscores to dash
    .toLowerCase(); //to lower case all string
}

spinalCase("isThis_Is Spinal-TapBom"); //returns "is-this-is-spinal-tap-bom"
