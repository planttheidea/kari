// test
import test from 'ava';
import _ from 'lodash';

// src
import getPath from 'src/_utils/getPath';

test('if getPath will return the path itself when it is an array', (t) => {
  const path = [0, 'foo'];

  const result = getPath(path);

  t.is(result, path);
});

test('if when the path is a number, it will be coalesced to an array of that number', (t) => {
  const path = 0;

  const result = getPath(path);

  t.deepEqual(result, [path]);
});

test('if when the path is a string, it will parse out the path based on dot and bracket notation', (t) => {
  const keys = ['foo', 0, 'bar', 'baz'];
  const path = keys
    .reduce((keyString, key) => {
      return `${keyString}${_.isNumber(key) ? `[${key}]` : `.${key}`}`;
    }, '')
    .substr(1);

  const result = getPath(path);

  t.deepEqual(result, keys);
});

test('if the path will handle the bracket notation being first', (t) => {
  const path = '[0].foo';

  const result = getPath(path);

  t.deepEqual(result, [0, 'foo']);
});

test('if the path will handle the bracket notation being last', (t) => {
  const path = 'foo[0]';

  const result = getPath(path);

  t.deepEqual(result, ['foo', 0]);
});

test('if when the path is not an array or string, it will return the item in an array', (t) => {
  const path = 123;

  const result = getPath(path);

  t.deepEqual(result, [123]);
});

test('if when the path has nested quoted strings, it will respect those strings as singular keys', (t) => {
  const simple = '["foo.bar"]';
  const simplePath = getPath(simple);

  t.deepEqual(simplePath, ['foo.bar']);

  const complex = 'foo[`bar.baz`]';
  const complexPath = getPath(complex);

  t.deepEqual(complexPath, ['foo', 'bar.baz']);

  const crazy = 'foo[\'bar.baz\'].blah[0]["super.blah"]';
  const crazyPath = getPath(crazy);

  t.deepEqual(crazyPath, ['foo', 'bar.baz', 'blah', 0, 'super.blah']);
});
