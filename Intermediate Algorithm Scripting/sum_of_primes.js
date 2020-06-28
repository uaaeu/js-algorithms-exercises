//Sum All Primes
function isPrime(number) { //to check the number is prime or not
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}
//sum of the all primes with isPrime function
function sumPrimes(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      result += i;
    }
  }
  return result;
}

sumPrimes(10); //return 17
