// test
import test from 'ava';
import _ from 'lodash';

// src
import some from 'src/some';

const isEven = (number) => {
  return number % 2 === 0;
};

const isZero = (number) => {
  return number === 0;
};

test('if some returns true if all items in the array match the method', (t) => {
  const items = [1, 2, 3, 4, 5];

  const result = some(_.isNumber)(items);

  t.true(result);
});

test('if some returns true if some items in the array match the method', (t) => {
  const items = [1, 2, 3, 4, 5];

  const result = some(isEven)(items);

  t.true(result);
});

test('if some returns false if no items in the array match the method', (t) => {
  const items = [1, 2, 3, 4, 5];

  const result = some(isZero)(items);

  t.false(result);
});

test('if some does the same for objects as it does arrays', (t) => {
  const truthyItems = {
    foo: 1,
    bar: 2,
    baz: 3
  };
  const falsyItems = {
    foo: 1,
    bar: 2,
    baz: 3
  };

  const truthyResult = some(isEven, truthyItems);

  t.true(truthyResult);

  const falsyResult = some(isZero, falsyItems);

  t.false(falsyResult);
});

test('if some returns false when the array or object is empty', (t) => {
  t.false(some(isEven, []));
  t.false(some(isEven, {}));
});
