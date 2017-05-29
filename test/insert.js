// test
import test from 'ava';

// src
import insert from 'src/insert';

test('if insert will add an item to the middle of the array at the index specified via curried method', (t) => {
  const array = [1, 2, 3];
  const item = 'x';
  const index = 2;

  const result = insert(index)(item)(array);

  t.not(result, array);
  t.deepEqual(result, [
    ...array.slice(0, index),
    item,
    ...array.slice(index)
  ]);
});

test('if insert will add an item to the middle of the array at the index specified via full arity', (t) => {
  const array = [1, 2, 3];
  const item = 'x';
  const index = 2;

  const result = insert(index, item, array);

  t.not(result, array);
  t.deepEqual(result, [
    ...array.slice(0, index),
    item,
    ...array.slice(index)
  ]);
});

test('if insert will add multiple items if the item is an array', (t) => {
  const array = [1, 2, 3];
  const items = ['x', 'y'];
  const index = 2;

  const result = insert(index, items, array);

  t.not(result, array);
  t.deepEqual(result, [
    ...array.slice(0, index),
    ...items,
    ...array.slice(index)
  ]);
});
