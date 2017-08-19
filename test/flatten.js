// test
import test from 'ava';

// src
import flatten from 'src/flatten';

test('if flatten will flatten the nested array', (t) => {
  const value = [1, [2, 3], [[4, 5], 6]];

  const result = flatten(value);

  t.deepEqual(result, [1, 2, 3, 4, 5, 6]);
});

test('if flatten will flatten the nested object', (t) => {
  const value = {
    one: 1,
    two: {
      three: 3,
      four: 4
    },
    five: {
      six: {
        seven: 7
      },
      eight: 8
    }
  };

  const result = flatten(value);

  t.deepEqual(result, {
    one: 1,
    three: 3,
    four: 4,
    seven: 7,
    eight: 8
  });
});

test('if flatten will return an array with the item when the item is not an array or object', (t) => {
  const value = 'foo';

  const result = flatten(value);

  t.deepEqual(result, [value]);
});
