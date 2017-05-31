// test
import test from 'ava';

// src
import subtract from 'src/subtract';

test('if subtract will subtract the two numbers passed (curried)', (t) => {
  const first = 10;
  const second = 4;

  const result = subtract(first)(second);

  t.is(result, first - second);
});

test('if subtract will subtract the two numbers passed (full arity)', (t) => {
  const first = 10;
  const second = 4;

  const result = subtract(first, second);

  t.is(result, first - second);
});
