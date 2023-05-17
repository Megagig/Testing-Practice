const stringLength = (string) => {
  const minLength = 1;
  const maxLength = 10;
  if (string.length < minLength) {
    throw new Error(`String must be at least ${minLength} characters long`);
  }
  if (string.length > maxLength) {
    throw new Error(`String must not be longer  than ${maxLength} characters`);
  }
  return string.length;
};

module.exports = stringLength;
