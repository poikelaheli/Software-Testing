// Import castArray method
import castArray from "../src/castArray";

describe('castArray method', () => {
  // Test cases for casting valid values to arrays
  test('casts valid value to array', () => {
    expect(castArray(3)).toBe([3]);
    expect(castArray('Hello')).toBe(['Hello']);
    expect(castArray({key: 'value'})).toBe([{key: 'value'}]);
  });

  test ('casts null, undefined or empty parameter', () => {
    expect(castArray(null)).toBe([null]);
    expect(castArray(undefined)).toBe([undefined]);
    expect(castArray()).toBe([]);
  });

  test('returns an empty array when called with no parameter', () => {
    expect(castArray()).toEqual([]);
  });
  
  test ('returns the parameter when it is an array', () => {
    expect(castArray([])).toStrictEqual([]);
    expect(castArray([1,3])).toStrictEqual([1,3]);
    expect(castArray(['Hi'])).toStrictEqual(['Hi']);
  });
});