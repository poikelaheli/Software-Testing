// Import castArray method
import castArray from "../src/castArray";

describe('Unit tests for castArray method', () => {
  // Test cases for casting valid values to arrays
  test('casts valid value to array', () => {
    expect(castArray(3)).toStrictEqual([3]);
    expect(castArray('Hello')).toStrictEqual(['Hello']);
    expect(castArray({key: 'value'})).toStrictEqual([{key: 'value'}]);
  });

  test ('casts null, undefined or empty parameter', () => {
    expect(castArray(null)).toStrictEqual([null]);
    expect(castArray(undefined)).toStrictEqual([undefined]);
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