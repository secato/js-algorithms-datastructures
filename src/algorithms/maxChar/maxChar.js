// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let frequencyMap = {};

  // fill the frequency map
  str
    .split('')
    .forEach((char) => (frequencyMap[char] = frequencyMap[char] + 1 || 1));

  const result = {
    char: '',
    value: 0,
  };

  for (let key in frequencyMap) {
    if (frequencyMap[key] > result.value) {
      result.char = key;
      result.value = frequencyMap[key];
    }
  }

  return result.char;
}

module.exports = maxChar;
