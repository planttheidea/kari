// test
import test from 'ava';

// src
import reduceObject from 'src/_utils/reduceObject';

test('if reduceObject will perform a reduction based on the items and initialValue passed', (t) => {
  const sum = (total, num) => {
    return total + num;
  };

  const items = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5
  };
  const initialValue = 0;
  const keys = Object.keys(items);

  const result = reduceObject(sum, items, initialValue, keys);

  let index = -1,
      expectedResult = 0;

  while (++index < keys.length) {
    expectedResult += items[keys[index]];
  }

  t.is(result, expectedResult);
});

test('if reduceObject will perform a reduction based on the items passed and assume initialValue is the first item when not given', (t) => {
  const sum = (total, num) => {
    return total + num;
  };

  const items = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5
  };
  const keys = Object.keys(items);

  const result = reduceObject(sum, items, undefined, keys);

  let index = 0,
      expectedResult = items[keys[0]];

  while (++index < keys.length) {
    expectedResult += items[keys[index]];
  }

  t.is(result, expectedResult);
});
