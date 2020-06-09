// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/**
 * Traditional way
 * @param {string} str
 */
function vowels(str) {
  let count = 0;
  for (const char of str) {
    if (isVowel(char)) {
      count++;
    }
  }
  return count;
}

function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

/**
 * Regex way, pretty easy
 * @param {string} str
 */
function vowels2(str) {
  // match all vowels (global) and case insensitive
  let matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels2;
