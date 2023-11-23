import eq from '../src/eq.js';

describe('eq function', () => {
  test('compares two equal objects', () => {
    const object = { 'a': 1 };
    const sameObject = object;
    expect(eq(object, sameObject)).toBe(true);
  });

  test('compares two different objects', () => {
    const object = { 'a': 1 };
    const other = { 'a': 1 };
    expect(eq(object, other)).toBe(false);
  });

  test('compares two equal strings', () => {
    expect(eq('a', 'a')).toBe(true);
  });

  test('compares string and string object', () => {
    expect(eq('a', Object('a'))).toBe(false);
  });

  test('compares two NaN values', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });

  test('compares null and undefined', () => {
    expect(eq(null, undefined)).toBe(false);
  });
});
