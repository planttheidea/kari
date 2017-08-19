// test
import test from 'ava';

// src
import coalesceToArray from 'src/_utils/coalesceToArray';

test('if coalesceToArray will keep the value as-is if an array', (t) => {
  const value = ['foo'];

  const result = coalesceToArray(value);

  t.is(result, value);
});

test('if coalesceToArray will make the value an array of that value when not an array', (t) => {
  const value = 'foo';

  const result = coalesceToArray(value);

  t.not(result, value);
  t.deepEqual(result, [value]);
});
