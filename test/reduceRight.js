// test
import test from 'ava';

// src
import reduceRight from 'src/reduceRight';

test('if reduceRight will perform a reduction based on the items and initialValue passed', (t) => {
  const diff = (total, num) => {
    return total - num;
  };

  const items = [1, 2, 3, 4, 5];
  const initialValue = 0;

  const result = reduceRight(diff)(items)(initialValue);
  const expectedResult = items.reduceRight(diff, initialValue);

  t.is(result, expectedResult);
});

test('if reduceRight will perform a reduction based on the items passed and asdiffe initialValue is the first item when not given', (t) => {
  const diff = (total, num) => {
    return total - num;
  };

  const items = [1, 2, 3, 4, 5];

  const result = reduceRight(diff, items, undefined);
  const expectedResult = items.reduceRight(diff);

  t.is(result, expectedResult);
});
