exports.reverse = (str) => {
  return str.split('').reverse().join('');
};

exports.reverse2 = (str) => {
  let reversed = '';
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
};
