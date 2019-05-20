Instructions:
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.

function destroyer(arr) {
  let targets = [...arguments].slice(1);
  let finalArr = [];
  for (let value of arr) {
    if (targets.indexOf(value) === -1) {
      finalArr.push(value);
    }
  }
  return finalArr;
}
