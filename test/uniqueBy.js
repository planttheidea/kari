// test
import test from 'ava';

// src
import uniqueBy from 'src/uniqueBy';

test('if uniqueBy will reduce the array based on unique returns from the function call', (t) => {
  const array = ['one', 'two', 'three', 'four', 'five', 'six'];
  const fn = (value) => {
    return value.length === 3;
  };

  const result = uniqueBy(fn)(array);

  t.deepEqual(result, ['one', 'three']);
});

test('if uniqueBy will reduce the object based on unique returns from the function call', (t) => {
  const object = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6};
  const fn = (value, key) => {
    return key.length === 3;
  };

  const result = uniqueBy(fn)(object);

  t.deepEqual(result, {one: 1, three: 3});
});
