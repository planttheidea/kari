// test
import test from 'ava';

// src
import reduce from 'src/reduce';

test('if reduce will reduce correctly if the items are an array', (t) => {
  const items = [1, 2, 3];
  const method = (sum, value) => {
    return sum + value;
  };
  const initialValue = 0;

  const result = reduce(method, initialValue, items);

  t.is(result, 6);
});

test('if reduce will reduce correctly if the items are an object', (t) => {
  const items = {one: 1, two: 2, three: 3};
  const method = (sum, value) => {
    return sum + value;
  };
  const initialValue = 0;

  const result = reduce(method, initialValue, items);

  t.is(result, 6);
});

test('if reduce will handle when the collection is not an array or object', (t) => {
  const items = 123;
  const method = (sum, value) => {
    return sum + value;
  };
  const initialValue = 0;

  const result = reduce(method, initialValue, items);

  t.is(result, items);
});
