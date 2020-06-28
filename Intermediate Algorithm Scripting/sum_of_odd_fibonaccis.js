//Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let result = 0; //result for sum
  let prev = 0; //previous number for count
  let curr = 1; //current number for calculate
  while (curr <= num) { //while loop to num
    if (curr % 2 !== 0) { //to detect odd numbers
      result += curr; //add odd fibonacci to result
    }
    curr += prev; //update current to go on
    prev = curr - prev; //update previous to count
  }
  return result;
}

sumFibs(4); //return 5