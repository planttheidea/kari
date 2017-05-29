// test
import test from 'ava';

// src
import reduce from 'src/reduce';

test('if reduce will perform a reduction based on the items and initialValue passed (curried)', (t) => {
  const sum = (total, num) => {
    return total + num;
  };

  const items = [1, 2, 3, 4, 5];
  const initialValue = 0;

  const result = reduce(sum)(items)(initialValue);
  const expectedResult = items.reduce(sum, initialValue);

  t.is(result, expectedResult);
});

test('if reduce will perform a reduction based on the items and initialValue passed (full arity)', (t) => {
  const sum = (total, num) => {
    return total + num;
  };

  const items = [1, 2, 3, 4, 5];
  const initialValue = 0;

  const result = reduce(sum, items, initialValue);
  const expectedResult = items.reduce(sum, initialValue);

  t.is(result, expectedResult);
});

test('if reduce will perform a reduction based on the items passed and assume initialValue is the first item when not given', (t) => {
  const sum = (total, num) => {
    return total + num;
  };

  const items = [1, 2, 3, 4, 5];

  const result = reduce(sum, items, undefined);
  const expectedResult = items.reduce(sum);

  t.is(result, expectedResult);
});
