// test
import test from 'ava';

// src
import findLastKey from 'src/findLastKey';

test('if findLastKey will find the first entry when the item is an array', (t) => {
  const items = [{}, {}, {}];

  items.push(items[1]);

  const method = (value) => {
    return value === items[1];
  };

  const result = findLastKey(method)(items);

  t.is(result, 3);
});

test('if findLastKey will find the first entry when the item is an array', (t) => {
  const items = [{}, {}, {}];

  items.push(items[1]);

  const method = (value) => {
    return value === {};
  };

  const result = findLastKey(method)(items);

  t.is(result, -1);
});

test('if findLastKey will find the first entry when the item is an object', (t) => {
  const items = {one: {}, two: {}, three: {}};

  items.four = items.one;

  const method = (value) => {
    return value === items.one;
  };

  const result = findLastKey(method)(items);

  t.is(result, 'four');
});

test('if findLastKey will find the first entry when the item is an object', (t) => {
  const items = {one: {}, two: {}, three: {}};

  items.four = items.one;

  const method = (value) => {
    return value === {};
  };

  const result = findLastKey(method)(items);

  t.is(result, undefined);
});

test('if findLastKey will find the only entry when the item is neither an array or object', (t) => {
  const items = 'foo';
  const method = (value) => {
    return value === 'foo';
  };

  const result = findLastKey(method)(items);

  t.is(result, 0);
});
