// test
import test from 'ava';

// src
import add from 'src/add';

test('if add will add the two numbers passed', (t) => {
  const first = 10;
  const second = 4;

  const result = add(first)(second);

  t.is(result, first + second);
});
