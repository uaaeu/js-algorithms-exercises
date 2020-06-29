//Palindrome Checker
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, ""); //to remove special chaharters and lowercase all letters
  const l = str.length - 1; //declare variable to use it later
  for (let i = 0; i <= l / 2; i++) {
    //for loop to check letters
    if (str[i] !== str[l - i]) {
      return false;
    }
  }
  return true;
}
