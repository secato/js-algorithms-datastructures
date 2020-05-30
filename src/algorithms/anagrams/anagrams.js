// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const sanitizedA = stringA.replace(/[^\w]/g, '').toLowerCase();
  const sanitizedB = stringB.replace(/[^\w]/g, '').toLowerCase();

  if (sanitizedA.length !== sanitizedB.length) {
    return false;
  }

  const frequencyA = makeFrequencyMap(sanitizedA);
  const frequencyB = makeFrequencyMap(sanitizedB);
  for (const char in frequencyA) {
    if (frequencyA[char] !== frequencyB[char]) {
      return false;
    }
  }

  return true;
}

function makeFrequencyMap(string) {
  let frequencyMap = {};

  string.split('').forEach((char) => {
    frequencyMap[char] = frequencyMap[char] + 1 || 1;
  });

  return frequencyMap;
}

function anagrams2(str1, str2) {
  const sanitize = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  const sanitizedA = sanitize(str1);
  const sanitizedB = sanitize(str2);

  return sanitizedA === sanitizedB;
}

module.exports = anagrams2;
