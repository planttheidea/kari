// test
import test from 'ava';
import _ from 'lodash';

// src
import pipe from 'src/pipe';

test('if pipe combines the function results passed from left to right', (t) => {
  const add = (a, b) => {
    return a + b;
  };
  const square = (c) => {
    return c ** 2;
  };
  const halve = (d) => {
    return d / 2;
  };

  const piped = pipe(add, square, halve);

  t.true(_.isFunction(piped));

  const args = [1, 2];

  const result = piped(...args);
  const standardResult = halve(square(add(...args)));

  t.is(result, standardResult);
});
