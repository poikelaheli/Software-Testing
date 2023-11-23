import isEmpty from '../src/isEmpty.js';

describe('isEmpty function', () => {
  test('returns true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('returns true for boolean values', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
  });

  test('returns true for numbers', () => {
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(-1)).toBe(true);
  });

  test('returns false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty([])).toBe(true);
  });

  test('returns false for non-empty strings', () => {
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty('')).toBe(true);
  });

  test('returns false for non-empty objects', () => {
    expect(isEmpty({ 'a': 1 })).toBe(false);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ length: 0 })).toBe(false);
  });
});
