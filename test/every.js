// test
import test from 'ava';
import _ from 'lodash';

// src
import every from 'src/every';

const isEven = (number) => {
  return number % 2 === 0;
};

test('if every returns true if all items in the array match the method', (t) => {
  const items = [1, 2, 3, 4, 5];

  const result = every(_.isNumber)(items);

  t.true(result);
});

test('if every returns true if all items in the array match the method', (t) => {
  const items = [1, 2, 3, 4, 5];

  const result = every((isEven))(items);

  t.false(result);
});

test('if every does the same for objects as it does for arrays', (t) => {
  const falseItems = {
    foo: 0,
    bar: 1,
    baz: 2
  };
  const trueItems = {
    foo: 0,
    bar: 2,
    baz: 4
  };

  t.false(every(isEven, falseItems));
  t.true(every(isEven, trueItems));
});

test('if every returns true when the array or object is empty', (t) => {
  const arrayResult = every(isEven, []);

  t.true(arrayResult);

  const objectResult = every(isEven, {});

  t.true(objectResult);
});
