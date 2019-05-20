Instructions:
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Solution:
function translatePigLatin(str) {
  let strArr = str.split("");
  let endPart = "";
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.indexOf(strArr[0]) > -1) {
    endPart = "way";
    return str.concat(endPart);
  } else {
    for (let i = 0; i < strArr.length; i++) {
      if (vowels.indexOf(strArr[i]) === -1) {
        endPart = endPart.concat(strArr[i]);
      } else {
        break;
      }
    }
    return str.slice(endPart.length).concat(endPart).concat("ay");
  }
}
