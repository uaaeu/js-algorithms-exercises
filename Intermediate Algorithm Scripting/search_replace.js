// Search and Replace
function myReplace(str, before, after) {
  let regex = /^[A-Z]/;
  if (regex.test(before)) {
    after = after.split("");
    after[0] = after[0].toUpperCase();
    after = after.join("");
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
//returns "A quick brown fox leaped over the lazy dog"

//a shoter way
function myReplace(str, before, after) {
  after = after.toLowerCase();
  if (/^[A-Z]/.test(before)) {
    after = after.slice(0, 1).toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
//return "A quick brown fox Leaped over the lazy dog"
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped");
//return "A quick brown fox leaped over the lazy dog"
