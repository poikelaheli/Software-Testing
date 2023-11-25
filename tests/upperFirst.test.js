// Import upperFirst method
import upperFirst from '../src/upperFirst';

describe('Unit tests for upperFirst method', () => {
  test('capitalizes the first letter of a string', () => {
    expect(upperFirst('hello')).toBe('Hello');
    expect(upperFirst('world')).toBe('World');
  });

  test('does not change an empty string', () => {
    expect(upperFirst('')).toBe('');
  });

  test('capitalizes only the first letter, leaving the rest unchanged', () => {
    expect(upperFirst('apple')).toBe('Apple');
    expect(upperFirst('banana')).toBe('Banana');
  });

  test('handles strings with leading numbers and symbols', () => {
    expect(upperFirst('123abc')).toBe('123abc');
    expect(upperFirst('!@#test')).toBe('!@#test');
  });

  test('handles strings with only one character', () => {
    expect(upperFirst('a')).toBe('A');
    expect(upperFirst('z')).toBe('Z');
  });

  // Additional test cases
  test('returns the same string for non-string input', () => {
    expect(upperFirst(123)).toBe(123);
    expect(upperFirst(true)).toBe(true);
    expect(upperFirst(null)).toBe(null);
  });

  test('handles non-string input with toString method', () => {
    const customObject = {
      toString: () => 'customObject',
    };
    expect(upperFirst(customObject)).toBe('CustomObject');
  });
});