Instructions:

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].

dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].

dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].

dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].

Solution:

function dropElements(arr, func) {
  // Establish the final array to return
  let finalArr = [];
  // Establish an array to store elements that don't satisfy the condition
  let rejects = [];
  // Iterate thru the given array
  for (let elem of arr) {
    // Check if the element is NOT the rejects array
    if (rejects.indexOf(elem) === -1) {
      // If it satisfies the condition, it goes into the final array
      if (func(elem)) {
        finalArr.push(elem);
      // If it does NOT satisfy the condition, it goes into the reject array
      } else {
        rejects.push(elem);
      }
    // Otherwise, put the element into final array cuz it won't matter if it doesn't match now
    } else {
      finalArr.push(elem);
    }
  }
  // Finally, return the final array
  return finalArr;
}
