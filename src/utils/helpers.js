function isNumber(str) {
  return /^-?\d+$/.test(str);
}

function isAlphabet(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function buildConcatString(alphabets) {
  return alphabets
    .reverse()
    .join("")
    .split("")
    .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
}

module.exports = { isNumber, isAlphabet, buildConcatString };
