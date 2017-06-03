// test
import test from 'ava';

// src
import isArray from 'src/_utils/isArray';

test('if isArray is equal to the global Array isArray', (t) => {
  t.is(isArray, Array.isArray);
});
