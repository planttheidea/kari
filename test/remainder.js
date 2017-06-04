// test
import test from 'ava';

// src
import remainder from 'src/remainder';

test('if remainder will get the remainder of the first number divided by the second number passed', (t) => {
  const first = 10;
  const second = 4;

  const result = remainder(first)(second);

  t.is(result, first % second);
});

test('if remainder will get the remainder of the first number divided by the second number passed when the first number is negative', (t) => {
  const first = -10;
  const second = 4;

  const result = remainder(first)(second);

  t.is(result, first % second);
});
