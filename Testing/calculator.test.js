const Calculator = require('../Functions/calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add method', () => {
    test('adds two positive numbers correctly', () => {
      expect(calculator.add(5, 3)).toBe(8);
    });

    test('adds a positive number and a negative number correctly', () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    test('adds two negative numbers correctly', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });
  });

  describe('subtract method', () => {
    test('subtracts a positive number from a larger positive number correctly', () => {
      expect(calculator.subtract(8, 3)).toBe(5);
    });

    test('subtracts a negative number from a positive number correctly', () => {
      expect(calculator.subtract(8, -3)).toBe(11);
    });

    test('subtracts a larger negative number from a smaller negative number correctly', () => {
      expect(calculator.subtract(-5, -8)).toBe(3);
    });
  });

  describe('multiply method', () => {
    test('multiplies two positive numbers correctly', () => {
      expect(calculator.multiply(5, 3)).toBe(15);
    });

    test('multiplies a positive number by zero correctly', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('multiplies a positive number by a negative number correctly', () => {
      expect(calculator.multiply(5, -3)).toBe(-15);
    });
  });

  describe('divide method', () => {
    test('divides a positive number by another positive number correctly', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divides a negative number by a positive number correctly', () => {
      expect(calculator.divide(-10, 2)).toBe(-5);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => {
        calculator.divide(5, 0);
      }).toThrow('Cannot divide by zero');
    });
  });
});
