 //Palindrome Checker Without Loop (Shorter and Better Way)
 function palindrome(str) { //a function that return boolean to check two string
    return (
      str.toLowerCase().replace(/[\W_]/g, "") === //lowercased and cleared string
      str.toLowerCase().replace(/[\W_]/g, "").split("").reverse().join("") //reversed string
    );
  }