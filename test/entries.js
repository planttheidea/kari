// test
import test from 'ava';

// src
import entries from 'src/entries';

test('if entries will return an empty array if the collection does not exist', (t) => {
  const result = entries(null);

  t.deepEqual(result, []);
});

test('if entries will get the entries from the iterable if it is a map', (t) => {
  const value = new Map().set('foo', 'bar');

  const result = entries(value);

  t.deepEqual(result, [['foo', 'bar']]);
});

test('if entries will get the entries from the iterable if it is a set', (t) => {
  const value = new Set().add('foo');

  const result = entries(value);

  t.deepEqual(result, [['foo', 'foo']]);
});

test.serial('if entries will get the entries from the iterable if it is a map and Array.from does not exist', (t) => {
  const arrayFrom = Array.from;

  Array.from = undefined;

  const value = new Map().set('foo', 'bar');

  const result = entries(value);

  t.deepEqual(result, [['foo', 'bar']]);

  Array.from = arrayFrom;
});

test.serial('if entries will get the entries from the iterable if it is a set and Array.from does not exist', (t) => {
  const arrayFrom = Array.from;

  Array.from = undefined;

  const value = new Set().add('foo');

  const result = entries(value);

  t.deepEqual(result, [['foo', 'foo']]);

  Array.from = arrayFrom;
});

test('if entries will map the key / value combination if a standard array', (t) => {
  const value = ['foo', 'bar'];

  const result = entries(value);

  t.deepEqual(result, [[0, 'foo'], [1, 'bar']]);
});

test('if entries will map the key / value combination if a standard object', (t) => {
  const value = {
    foo: 'bar',
    bar: 'baz'
  };

  const result = entries(value);

  t.deepEqual(result, [['foo', 'bar'], ['bar', 'baz']]);
});
