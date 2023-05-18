const stringLength = (string) => {
  if (typeof string !== 'string') {
    throw new Error('Please enter a string');
  }
  return string.length;
};

module.exports = stringLength;
