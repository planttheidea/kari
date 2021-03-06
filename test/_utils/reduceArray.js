// test
import test from 'ava';

// src
import reduceArray from 'src/_utils/reduceArray';

test('if reduceArray will perform a reduction based on the items and initialValue passed', (t) => {
  const sum = (total, num) => {
    return total + num;
  };

  const items = [1, 2, 3, 4, 5];
  const initialValue = 0;

  const result = reduceArray(sum, items, initialValue);
  const expectedResult = items.reduce(sum, initialValue);

  t.is(result, expectedResult);
});

test('if reduceArray will perform a reduction based on the items passed and assume initialValue is the first item when not given', (t) => {
  const sum = (total, num) => {
    return total + num;
  };

  const items = [1, 2, 3, 4, 5];

  const result = reduceArray(sum, items, undefined);
  const expectedResult = items.reduce(sum);

  t.is(result, expectedResult);
});
