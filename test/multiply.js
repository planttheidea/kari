// test
import test from 'ava';

// src
import multiply from 'src/multiply';

test('if multiply will multiply the two numbers passed', (t) => {
  const first = 10;
  const second = 4;

  const result = multiply(first)(second);

  t.is(result, first * second);
});
