// test
import test from 'ava';

// src
import take from 'src/take';

test('if take will get the first n number of items in the array', (t) => {
  const items = [1, 2, 3, 4, 5];
  const n = 2;

  const result = take(n)(items);

  t.is(result.length, n);
  t.deepEqual(result, items.slice(0, n));
});

test('if take will return an empty array when the size requested is zero', (t) => {
  const items = [1, 2, 3, 4, 5];
  const n = 0;

  const result = take(n)(items);

  t.is(result.length, n);
  t.deepEqual(result, []);
});

test('if take will get the first n number of items in the object', (t) => {
  const items = {one: 1, two: 2, three: 3, four: 4, five: 5};
  const n = 2;

  const result = take(n)(items);

  t.is(Object.keys(result).length, n);
  t.deepEqual(result, {
    one: 1,
    two: 2
  });
});
