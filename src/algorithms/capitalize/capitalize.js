// examples
// 'a short sentence' ---> 'A Short Sentence'
// 'a lazy fox' ---> 'A Lazy Fox'

/**
 * Functional approach
 * @param {string} str
 */
function capitalize(str) {
  return str
    .split(/\s/) // white space
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * More tradditional approach
 * @param {string} str
 */
function capitalize2(str) {
  let words = [];
  for (const word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}


module.exports = capitalize;
