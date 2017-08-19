// test
import test from 'ava';

// src
import insert from 'src/insert';

test('if insert will add an item to the middle of the array at the index specified', (t) => {
  const array = [1, 2, 3];
  const item = 'x';
  const index = 2;

  const result = insert(index)(item)(array);

  t.not(result, array);
  t.deepEqual(result, [...array.slice(0, index), item, ...array.slice(index)]);
});

test('if insert will add multiple items if the item is an array', (t) => {
  const array = [1, 2, 3];
  const items = ['x', 'y'];
  const index = 2;

  const result = insert(index)(items)(array);

  t.not(result, array);
  t.deepEqual(result, [...array.slice(0, index), ...items, ...array.slice(index)]);
});

test('if insert will add the item to the object', (t) => {
  const object = {
    foo: 'bar'
  };
  const item = 'baz';
  const key = 'bar';

  const result = insert(key)(item)(object);

  t.not(result, object);
  t.deepEqual(result, {
    ...object,
    [key]: item
  });
});

test('if insert will convert items to an array and insert the new value if it is not already an array', (t) => {
  const value = 'foo';
  const item = 'bar';
  const index = 0;

  const result = insert(index)(item)(value);

  t.not(result, value);
  t.deepEqual(result, [item, value]);
});
