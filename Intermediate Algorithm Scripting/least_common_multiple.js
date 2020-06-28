//Smallest Common Multiple
function smallestCommons(arr) {
  // Euclidean algorithm for the greatest common divisor.
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Least Common Multiple for two numbers based on GCD
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // Sort array to declare min, max
  let [min, max] = arr.sort((a, b) => a - b);
  let currentLCM = min;

  // While loop to calculate smallest common multiple
  while (min < max) {
    currentLCM = lcm(currentLCM, ++min);
  }
  return currentLCM;
}

smallestCommons([1, 5]); //return 60;
