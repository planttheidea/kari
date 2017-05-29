// test
import test from 'ava';
import _ from 'lodash';

// src
import compose from 'src/compose';

test('if compose combines the function results passed from right to left', (t) => {
  const add = (a, b) => {
    return a + b;
  };
  const square = (c) => {
    return c ** 2;
  };
  const halve = (d) => {
    return d / 2;
  };

  const composed = compose(halve, square, add);

  t.true(_.isFunction(composed));

  const args = [1, 2];

  const result = composed(...args);
  const standardResult = halve(square(add(...args)));

  t.is(result, standardResult);
});
