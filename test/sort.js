// test
import test from 'ava';

// src
import sort from 'src/sort';

test('if sort will return a new array sorted based on the comparator function', (t) => {
  const comparator = (a, b) => {
    return a > b;
  };
  const items = [4, 1, 2, 8, 4];

  const result = sort(comparator)(items);

  t.not(result, items);

  const sortedClone = [...items].sort();

  t.deepEqual(result, sortedClone);
});
