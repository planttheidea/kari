// test
import test from 'ava';

// src
import rest from 'src/rest';

test('if take will get the last n number of items in the array', (t) => {
  const items = [1, 2, 3, 4, 5];
  const n = 2;

  const result = rest(n)(items);

  t.is(result.length, n);
  t.deepEqual(result, items.slice(items.length - n));
});

test('if take will return an empty array when the size is zero', (t) => {
  const items = [1, 2, 3, 4, 5];
  const n = 0;

  const result = rest(n)(items);

  t.is(result.length, n);
  t.deepEqual(result, []);
});

test('if take will get the last n number of items in the object', (t) => {
  const items = {one: 1, two: 2, three: 3, four: 4, five: 5};
  const n = 2;

  const result = rest(n)(items);

  t.is(Object.keys(result).length, n);
  t.deepEqual(result, {
    four: 4,
    five: 5
  });
});
