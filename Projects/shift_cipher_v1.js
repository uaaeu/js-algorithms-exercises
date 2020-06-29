//Shift Cipher
function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return str
    .split("")
    .map((x) => {
      const index = alphabet.indexOf(x);
      return index >= 0 ? alphabet[(index + 13) % 26] : x;
    })
    .join("");
}

rot13("SERR YBIR?"); //return "FREE LOVE"
