Instructions:
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.

Solution:
function diffArray(arr1, arr2) {
  let concatArr = arr1.concat(arr2);
  let newArr = concatArr.filter(value => arr1.indexOf(value) !== -1 && arr2.indexOf(value) === -1 || arr1.indexOf(value) === -1 && arr2.indexOf(value)!== -1);
  return newArr;
}
