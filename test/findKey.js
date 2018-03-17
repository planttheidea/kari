// test
import test from 'ava';

// src
import findKey from 'src/findKey';

test('if findKey will find the first entry when the item is an array', (t) => {
  const items = [{}, {}, {}];

  items.push(items[1]);

  const method = (value) => {
    return value === items[1];
  };

  const result = findKey(method)(items);

  t.is(result, 1);
});

test('if findKey will find the first entry when the item is an array', (t) => {
  const items = [{}, {}, {}];

  items.push(items[1]);

  const method = (value) => {
    return value === {};
  };

  const result = findKey(method)(items);

  t.is(result, -1);
});

test('if findKey will find the first entry when the item is an object', (t) => {
  const items = {one: {}, two: {}, three: {}};

  items.four = items.one;

  const method = (value) => {
    return value === items.one;
  };

  const result = findKey(method)(items);

  t.is(result, 'one');
});

test('if findKey will find the first entry when the item is an object', (t) => {
  const items = {one: {}, two: {}, three: {}};

  items.four = items.one;

  const method = (value) => {
    return value === {};
  };

  const result = findKey(method)(items);

  t.is(result, undefined);
});

test('if findKey will find the only entry when the item is neither an array or object', (t) => {
  const items = 'foo';
  const method = (value) => {
    return value === 'foo';
  };

  const result = findKey(method)(items);

  t.is(result, 0);
});
