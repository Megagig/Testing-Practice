function reverseString(string) {
  if (typeof string !== 'string') {
    throw new Error('Please provide a valid string');
  }

  return string.split('').reverse().join('');
}

module.exports = reverseString;
