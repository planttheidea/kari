// test
import test from 'ava';

// src
import apply from 'src/apply';

test('if apply will create a method that will apply the arguments passed to fn', (t) => {
  const fn = (a, b, c) => {
    return [a, b, c];
  };
  const args = [1, 2, 3];

  const result = apply(fn)(args);

  t.deepEqual(result, args);
});
