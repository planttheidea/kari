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
