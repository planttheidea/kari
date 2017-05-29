// test
import test from 'ava';

// src
import prepend from 'src/prepend';

test('if prepend will add an item to the beginning of the array via curried method', (t) => {
  const array = [1, 2, 3];
  const item = 'x';

  const result = prepend(item)(array);

  t.not(result, array);
  t.deepEqual(result, [
    item,
    ...array
  ]);
});

test('if prepend will add an item to the beginning of the array via full arity', (t) => {
  const array = [1, 2, 3];
  const item = 'x';

  const result = prepend(item, array);

  t.not(result, array);
  t.deepEqual(result, [
    item,
    ...array
  ]);
});
