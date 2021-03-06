Instructions:
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

Solution:
function sumFibs(num) {
  let sum = 1;
  let prevFib = 1;
  let nextFib = 1;
  while (nextFib <= num) {
    if (nextFib % 2 === 1) {
      sum += nextFib;
    }
    let nextValue = nextFib;
    nextFib += prevFib;
    prevFib = nextValue;
  }
  return sum;
}
