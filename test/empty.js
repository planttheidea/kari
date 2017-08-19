// test
import test from 'ava';

// src
import empty from 'src/empty';

test('if empty returns an empty array if the value passed is an array', (t) => {
  const value = ['foo', 'bar', 'baz'];

  const result = empty(value);

  t.deepEqual(result, []);
});

test('if empty returns an empty object if the value passed is an object', (t) => {
  const value = {
    foo: 'bar',
    bar: 'baz'
  };

  const result = empty(value);

  t.deepEqual(result, {});
});

test('if empty returns an empty string if the value passed is a string', (t) => {
  const value = 'foo';

  const result = empty(value);

  t.deepEqual(result, '');
});

test('if empty returns an empty map if the value passed is a map', (t) => {
  const value = new Map().set('foo', 'bar');

  const result = empty(value);

  t.deepEqual(result, new Map());
});

test('if empty returns an set map if the value passed is a set', (t) => {
  const value = new Set().add('foo');

  const result = empty(value);

  t.deepEqual(result, new Set());
});

test('if empty returns undefined if the value passed is anything else', (t) => {
  const number = 123;
  const regexp = /foo/;

  t.deepEqual(empty(number), undefined);
  t.deepEqual(empty(regexp), undefined);
});
