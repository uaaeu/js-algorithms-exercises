//Shift Cipher v2 ROT13 Decoder
function rot13(str) {
  return str.replace(/[A-Z]/g, (r) =>
    String.fromCharCode((r.charCodeAt() % 26) + 65)
  );
}

rot13("SERR YBIR?"); //return "FREE LOVE"
