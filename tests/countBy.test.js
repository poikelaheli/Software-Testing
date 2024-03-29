import countBy from '../src/countBy.js';

describe('countBy function', () => {
  const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
  ];

  test('counts by active property', () => {
    const result = countBy(users, value => value.active);
    expect(result).toEqual({ 'true': 1, 'false': 0 });
  });

  test('counts by string length', () => {
    const strings = ['apple', 'banana', 'orange', 'pear'];
    const result = countBy(strings, value => value.length);
    expect(result).toEqual({ '5': 0, '6': 1, '4': 0 });
  });

  test('counts by modulo', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = countBy(numbers, value => value % 2);
    expect(result).toEqual({ '1': 2, '0': 1 });
  });
});
