const reverseString = require('../Functions/reverseString');

test('reverseString reverses the given string', () => {
  expect(reverseString('Austin')).toBe('nitsuA');
});
