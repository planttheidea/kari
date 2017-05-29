// test
import test from 'ava';
import _ from 'lodash';

// src
import * as object from 'src/_utils/object';

test('if getKey will return the key as-is when it is not a number', (t) => {
  const key = 'foo';

  const result = object.getKey(key);

  t.is(result, key);
});

test('if getKey will return the key as a number when it is a number string', (t) => {
  const key = '1';

  const result = object.getKey(key);

  t.is(result, parseInt(key, 10));
});

test('if getPath will return the path itself when it is an array', (t) => {
  const path = [0, 'foo'];

  const result = object.getPath(path);

  t.is(result, path);
});

test('if when the path is a number, it will be coalesced to an array of that number', (t) => {
  const path = 0;

  const result = object.getPath(path);

  t.deepEqual(result, [
    path
  ]);
});

test('if when the path is a string, it will parse out the path based on dot and bracket notation', (t) => {
  const keys = [
    'foo',
    0,
    'bar',
    'baz'
  ];
  const path = keys
    .reduce((keyString, key) => {
      return `${keyString}${_.isNumber(key) ? `[${key}]` : `.${key}`}`;
    }, '')
    .substr(1);

  const result = object.getPath(path);

  t.deepEqual(result, keys);
});

test('if the path will handle the bracket notation being first', (t) => {
  const path = '[0].foo';

  const result = object.getPath(path);

  t.deepEqual(result, [
    0,
    'foo'
  ]);
});

test('if the path will handle the bracket notation being last', (t) => {
  const path = 'foo[0]';

  const result = object.getPath(path);

  t.deepEqual(result, [
    'foo',
    0
  ]);
});

test('if when the path is not an array, number or string, it will return undefined', (t) => {
  const path = {};

  const result = object.getPath(path);

  t.is(result, undefined);
});
