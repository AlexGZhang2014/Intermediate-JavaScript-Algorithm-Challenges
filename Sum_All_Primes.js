//Instructions:
//Sum all the prime numbers up to and including the provided number.

//A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

//The provided number may not be a prime.

//Solution:
function sumPrimes(num) {
  const isPrime = (value) => {
    let currentNum = 2;
    while (currentNum < value) {
      if (value % currentNum === 0) {
        return false;
      }
      currentNum++;
    }
    return true;
  }
  let prime = 2;
  let sum = 0;
  while (prime <= num) {
    if (isPrime(prime)) {
      sum += prime;
    }
    prime++;
  }
  return sum;
}
