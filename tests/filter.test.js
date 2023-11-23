import filter from '../src/filter.js';

describe('filter function', () => {
  const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false }
  ];

  test('filters active users', () => {
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([{ 'user': 'barney', 'active': true }]);
  });

  test('filters even numbers', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = filter(numbers, num => num % 2 === 0);
    expect(result).toEqual([2, 4]);
  });

  test('filters by string length', () => {
    const strings = ['apple', 'banana', 'orange', 'pear'];
    const result = filter(strings, str => str.length > 5);
    expect(result).toEqual(['banana', 'orange']);
  });

  test('filters by index', () => {
    const elements = ['a', 'b', 'c', 'd', 'e'];
    const result = filter(elements, (_, index) => index % 2 === 0);
    expect(result).toEqual(['a', 'c', 'e']);
  });

  test('returns empty array for empty input', () => {
    const result = filter([], () => true);
    expect(result).toEqual([]);
  });
});
