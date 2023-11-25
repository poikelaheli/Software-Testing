// Importi capitalize method
import capitalize from "../src/capitalize";

describe('capitalize method', () => {
  test('capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('day')).toBe('Day');
    expect(capitalize('MONDAY')).toBe('Monday');
    expect(capitalize('sNoW')).toBe('Snow');
  });

  test('does not change an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('handles strings with leading numbers and symbols', () => {
    expect(capitalize('123abc')).toBe('123abc');
    expect(capitalize('!@#test')).toBe('!@#test');
  });

  test('handles strings with only one character', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('z')).toBe('Z');
  });
});