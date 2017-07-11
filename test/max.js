// test
import test from 'ava';

// src
import max from 'src/max';

test('if max returns the maximum value of the two numbers', (t) => {
  const lower = 10;
  const higher = 20;

  const result = max(lower)(higher);

  t.is(result, higher);
});
