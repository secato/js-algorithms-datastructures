exports.palindrome = (str) => {
  return str === str.split('').reverse().join('');
};
