// test
import test from 'ava';

// src
import findLast from 'src/findLast';

test('if findLast will find the first entry when the item is an array', (t) => {
  const items = [{}, {}, {}];

  items.push(items[1]);

  const method = (value) => {
    return value === items[3];
  };

  const result = findLast(method)(items);

  t.is(result, items[3]);
});

test('if findLast will find the first entry when the item is an object', (t) => {
  const items = {one: {}, two: {}, three: {}};

  items.four = items.one;

  const method = (value) => {
    return value === items.one;
  };

  const result = findLast(method)(items);

  t.is(result, items.four);
});

test('if findLast will find the only entry when the item is neither an array or object', (t) => {
  const items = 'foo';
  const method = (value) => {
    return value === 'foo';
  };

  const result = findLast(method)(items);

  t.is(result, items);
});
