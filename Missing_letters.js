Instructions:
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Solution:
function fearNotLetter(str) {
  const allLetters = "abcdefghijklmnopqrstuvwxyz";
  if (allLetters.includes(str)) {
    return undefined;
  } else {
    let strArr = str.split("");
    for (let i = 0; i < strArr.length-1; i++) {
      if (allLetters.indexOf(strArr[i+1]) - allLetters.indexOf(strArr[i]) > 1) {
        return allLetters.charAt(allLetters.indexOf(strArr[i])+1);
      }
    }
  }
}
