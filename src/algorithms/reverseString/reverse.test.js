const { reverse, reverse2 } = require('./reverse');

describe('Reverse string', () => {
  test('Solution 1', () => {
    expect(reverse('Felipe')).toBe('epileF');
  });

  test('Solution 2', () => {
    expect(reverse2('Felipe')).toBe('epileF');
  });
});
