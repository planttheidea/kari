// test
import test from 'ava';

// src
import sort from 'src/sort';

test('if sort will return a new array sorted based on the comparator function (curried)', (t) => {
  const comparator = (a, b) => {
    return a > b;
  };
  const items = [4, 1, 2, 8, 4];

  const result = sort(comparator)(items);

  t.not(result, items);

  const sortedClone = [...items].sort();

  t.deepEqual(result, sortedClone);
});

test('if sort will return a new array sorted based on the comparator function (full arity)', (t) => {
  const comparator = (a, b) => {
    return a > b;
  };
  const items = [4, 1, 2, 8, 4];

  const result = sort(comparator, items);

  t.not(result, items);

  const sortedClone = [...items].sort();

  t.deepEqual(result, sortedClone);
});
