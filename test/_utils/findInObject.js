// test
import test from 'ava';

// src
import findInObject from 'src/_utils/findInObject';

test('if findInObject will find the item in the array that matches when isKey is false', (t) => {
  const items = {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz'
  };
  const method = (item) => {
    return item === 'bar';
  };

  const result = findInObject(method, items, Object.keys(items), false);

  t.is(result, items.bar);
});

test('if findInObject will find the index in the array that matches when isKey is true', (t) => {
  const items = {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz'
  };
  const method = (item) => {
    return item === 'bar';
  };

  const result = findInObject(method, items, Object.keys(items), true);

  t.is(result, 'bar');
});

test('if findInObject returns undefined if nothing matching is found and isKey is false', (t) => {
  const items = {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz'
  };
  const method = (item) => {
    return item === 'blarg';
  };

  const result = findInObject(method, items, Object.keys(items), false);

  t.is(result, undefined);
});

test('if findInObject returns undefined if nothing matching is found and isKey is true', (t) => {
  const items = {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz'
  };
  const method = (item) => {
    return item === 'blarg';
  };

  const result = findInObject(method, items, Object.keys(items), true);

  t.is(result, undefined);
});
