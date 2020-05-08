const { palindrome } = require('./palindrome');

describe('Palindrome', () => {
  test('It asserts true', () => {
    expect(palindrome('lol')).toBe(true);
  });

  test('It asserts false', () => {
    expect(palindrome('fake')).toBe(false);
  });
});
