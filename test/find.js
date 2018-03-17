// test
import test from 'ava';

// src
import find from 'src/find';

test('if find will find the first entry when the item is an array', (t) => {
  const items = [{}, {}, {}];

  items.push(items[1]);

  const method = (value) => {
    return value === items[1];
  };

  const result = find(method)(items);

  t.is(result, items[1]);
});

test('if find will find find the first entry when the item is an object', (t) => {
  const items = {one: {}, two: {}, three: {}};

  items.four = items.one;

  const method = (value) => {
    return value === items.one;
  };

  const result = find(method)(items);

  t.is(result, items.one);
});

test('if find will find the only entry when the item is neither an array or object', (t) => {
  const items = 'foo';
  const method = (value) => {
    return value === 'foo';
  };

  const result = find(method)(items);

  t.is(result, items);
});
