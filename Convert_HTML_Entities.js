//Instructions:
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

//Solution:
function convertHTML(str) {
  const HTMLentities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "\'": "&apos;"
  }
  for (let char of str) {
    if (HTMLentities.hasOwnProperty(char)) {
      str = str.replace(char, HTMLentities[char]);
    }
  }
  return str;
}
