// test
import test from 'ava';

// src
import sort from 'src/sort';

test('if sort will return a new array sorted based on the comparator function', (t) => {
  const comparator = (a, b) => a < b;
  const items = [4, 1, 2, 8, 4];

  const result = sort(comparator)(items);

  t.not(result, items);

  const sortedClone = [...items].sort().reverse();

  t.deepEqual(result, sortedClone);
});

test('if sort will return a new array sorted by default', (t) => {
  const comparator = null;
  const items = [4, 1, 2, 8, 4];

  const result = sort(comparator)(items);

  t.not(result, items);

  const sortedClone = [...items].sort();

  t.deepEqual(result, sortedClone);
});

test('if sort will return a new object sorted based on the comparator function', (t) => {
  const comparator = (a, b) => a < b;
  const items = {one: 4, two: 1, three: 3, four: 8, five: 4};

  const result = sort(comparator)(items);

  t.not(result, items);

  t.deepEqual(Object.keys(result), ['four', 'one', 'five', 'three', 'two']);

  t.deepEqual(result, {
    four: 8,
    five: 4,
    one: 4,
    three: 3,
    two: 1
  });
});

test('if sort will return a new object sorted by default', (t) => {
  const comparator = null;
  const items = {one: 4, two: 1, three: 3, four: 8, five: 4};

  const result = sort(comparator)(items);

  t.not(result, items);

  t.deepEqual(Object.keys(result), ['two', 'three', 'one', 'five', 'four']);

  t.deepEqual(result, {
    two: 1,
    three: 3,
    one: 4,
    five: 4,
    four: 8
  });
});
