// test
import test from 'ava';

// src
import min from 'src/min';

test('if min returns the minimum value of the two numbers', (t) => {
  const lower = 10;
  const higher = 20;

  const result = min(lower)(higher);

  t.is(result, lower);
});
