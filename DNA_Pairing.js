Instructions:
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Solution:
function pairElement(str) {
  let strArr = str.split("");
  let finalArr = [];
  const basePairs = {
    "A": "T",
    "C": "G",
    "G": "C",
    "T": "A"
  }
  for (let value of strArr) {
    let subArr = [value];
    subArr.push(basePairs[value]);
    finalArr.push(subArr);
  }
  return finalArr;
}
