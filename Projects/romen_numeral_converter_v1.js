//Romen Numeral Converter with for and while loops
function convertToRoman(num) {
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let romanNum = ""; //empty string to store romen numbers
  const len = romans.length; //declare length
  for (let i = 0; i < len; i++) { //for loop to check through the arrays
    while (numbers[i] <= num) { //while loop to check through the numbers array
      romanNum += romans[i]; //add nearly biggest roman number to string
      num -= numbers[i]; //sub the added number from given number if founded roman is smaller than given number 
    }
  }
  return romanNum;
}

convertToRoman(36); //return "XXXVI"
