import keys from '../src/keys.js';

describe('keys function', () => {
  test('returns keys of an object', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };
    const result = keys(obj);
    expect(result).toEqual(['a', 'b', 'c']);
  });

  test('returns keys of an instance', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;

    const instance = new Foo();
    const result = keys(instance);
    expect(result).toEqual(['a', 'b']);
  });

  test('returns keys of a string', () => {
    const str = 'hello';
    const result = keys(str);
    expect(result).toEqual(['0', '1', '2', '3', '4']);
  });

  test('returns empty array for null', () => {
    const nullObj = null;
    const result = keys(nullObj);
    expect(result).toEqual([]);
  });
});
