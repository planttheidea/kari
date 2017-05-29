// test
import test from 'ava';

// src
import rest from 'src/rest';

test('if take will get the last n number of items in the array (curried)', (t) => {
  const items = [1, 2, 3, 4, 5];
  const n = 2;

  const result = rest(n)(items);

  t.is(result.length, n);
  t.deepEqual(result, items.slice(items.length - n));
});

test('if take will get the last n number of items in the array (full arity)', (t) => {
  const items = [1, 2, 3, 4, 5];
  const n = 2;

  const result = rest(n, items);

  t.is(result.length, n);
  t.deepEqual(result, items.slice(items.length - n));
});
