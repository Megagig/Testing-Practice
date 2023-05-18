const stringLength = require('../Functions/stringLength');

test('returns the correct length', () => {
  expect(stringLength('Austin')).toBe(6);
});

test('does not match incorrect length', () => {
  expect(stringLength('Ilomuanya')).not.toBe('six');
});

test('handles non-string input', () => {
  expect(() => {
    stringLength(1000);
  }).toThrow('Please enter a string');
});
