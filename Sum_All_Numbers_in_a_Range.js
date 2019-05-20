We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

function sumAll(arr) {
  let sum = 0;
  const sortedArr = arr.sort((a, b) => a - b);
  let minNum = sortedArr[0];
  let maxNum = sortedArr[sortedArr.length-1];
  while (minNum <= maxNum) {
    sum += minNum;
    minNum++;
  }
  return sum;
}

sumAll([1, 4]);
