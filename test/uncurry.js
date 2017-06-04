// test
import test from 'ava';
import _ from 'lodash';

// src
import uncurry from 'src/uncurry';
import curry from 'src/curry';

test('if uncurry will return a method that will remove currying on the original curried function and instead accept all normal parameters', (t) => {
  const originalMethod = (a, b, c, d) => {
    return [a, b, c, d];
  };

  const curried = curry(originalMethod);

  const first = 1;
  const second = 2;
  const third = 3;
  const fourth = 4;

  const testCurried = curried(first)(second)(third)(fourth);

  t.deepEqual(testCurried, [first, second, third, fourth]);

  const uncurried = uncurry(originalMethod.length)(curried);

  t.true(_.isFunction(uncurried));

  t.deepEqual(uncurried(first, second, third, fourth), [first, second, third, fourth]);

  t.throws(() => {
    uncurried(first)(second)(third)(fourth);
  });
});
