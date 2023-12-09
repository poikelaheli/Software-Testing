// Import ceil method
import ceil from '../src/ceil';

describe('Unit tests for ceil method', () => {
  // Test cases for rounding to the nearest whole number
  test('rounds up to the nearest whole number', () => {
    expect(ceil(5.3)).toBe(6);
    expect(ceil(10.7)).toBe(11);
    expect(ceil(-3.2)).toBe(-3); // Rounding up for negative numbers
  });

  // Test cases for rounding with precision
  describe('rounding with precision', () => {
    test('rounds up to the nearest float with 2 decimals', () => {
      expect(ceil(5.378, 2)).toBe(5.38);
      expect(ceil(10.456, 2)).toBe(10.46);
    });

    test('rounds up to the nearest float with 3 decimals', () => {
      expect(ceil(5.3789, 3)).toBe(5.379);
      expect(ceil(10.4567, 3)).toBe(10.457);
    });

    test('rounds up to the nearest integer when precision is 0', () => {
      expect(ceil(5.378, 0)).toBe(6);
      expect(ceil(10.456, 0)).toBe(11);
    });

    test('rounds up to the nearest hundred when precision is -2', () => {
      expect(ceil(1234, -2)).toBe(1300);
      expect(ceil(56789, -2)).toBe(56800);
    });

    test('handles precision for negative numbers', () => {
      expect(ceil(-5.378, 2)).toBe(-5.37);
      expect(ceil(-10.456, 2)).toBe(-10.45);
    });
  });

  test('returns NaN for invalid input', () => {
    expect(ceil('abc')).toBeNaN();
    expect(ceil(null)).toBe(0);
  });

  test('handles precision parameter not being a number', () => {
    expect(ceil(5.378, 'invalid')).toBe(6);
  });
});