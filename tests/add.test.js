import add from '../src/add.js';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
  
  test('adds -3 + 5 to equal 2', () => {
    expect(add(-3, 5)).toBe(2);
  });
  
  test('adds 10 + 0 to equal 10', () => {
    expect(add(10, 0)).toBe(10);
  });
  
  test('adds 2.5 + 1.5 to equal 4', () => {
    expect(add(2.5, 1.5)).toBe(4);
  });
  
  test('adds 999999999 + 1 to equal 1000000000', () => {
    expect(add(999999999, 1)).toBe(1000000000);
  });
  
  test('adds NaN + 5 to equal NaN', () => {
    expect(add(NaN, 5)).toBeNaN();
  });
  
  test('adds Infinity + 10 to equal Infinity', () => {
    expect(add(Infinity, 10)).toBe(Infinity);
  });  
})
