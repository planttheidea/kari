// test
import test from 'ava';

// src
import reduceRight from 'src/reduceRight';

test('if reduceRight will reduce correctly if the items are an array', (t) => {
  const items = [1, 2, 3];
  const method = (sum, value) => {
    return sum + value;
  };
  const initialValue = 0;

  const result = reduceRight(method, initialValue, items);

  t.is(result, 6);
});

test('if reduceRight will reduce correctly if the items are an object', (t) => {
  const items = {one: 1, two: 2, three: 3};
  const method = (sum, value) => {
    return sum + value;
  };
  const initialValue = 0;

  const result = reduceRight(method, initialValue, items);

  t.is(result, 6);
});

test('if reduceRight will handle when the collection is not an array or object', (t) => {
  const items = 123;
  const method = (sum, value) => {
    return sum + value;
  };
  const initialValue = 0;

  const result = reduceRight(method, initialValue, items);

  t.is(result, items);
});
