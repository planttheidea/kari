// test
import test from 'ava';

// src
import divide from 'src/divide';

test('if divide will divide the two numbers passed (curried)', (t) => {
  const first = 10;
  const second = 4;

  const result = divide(first)(second);

  t.is(result, first / second);
});

test('if divide will divide the two numbers passed (full arity)', (t) => {
  const first = 10;
  const second = 4;

  const result = divide(first, second);

  t.is(result, first / second);
});
