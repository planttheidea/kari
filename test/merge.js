// test
import test from 'ava';

// src
import merge from 'src/merge';

test('if merge will merge two arrays of equal length', (t) => {
  const first = [1, 2, 3];
  const second = ['foo', 'bar', 'baz'];

  const result = merge(first, second);

  t.deepEqual(result, second);
});

test('if merge will merge two arrays where the first is longer than the second', (t) => {
  const first = [1, 2, 3, 4, 5];
  const second = ['foo', 'bar', 'baz'];

  const result = merge(first, second);

  t.deepEqual(result, [...second, ...first.slice(3)]);
});

test('if merge will merge two arrays where the first is shorter than the second', (t) => {
  const first = [1, 2, 3];
  const second = ['foo', 'bar', 'baz', 'blah'];

  const result = merge(first, second);

  t.deepEqual(result, second);
});

test('if merge will merge two objects with alike keys', (t) => {
  const first = {
    foo: 'foo',
    bar: 'bar'
  };
  const second = {
    foo: 'bar',
    bar: 'baz'
  };

  const result = merge(first, second);

  t.deepEqual(result, second);
});

test('if merge will merge two objects with different keys', (t) => {
  const first = {
    foo: 'foo',
    bar: 'bar'
  };
  const second = {
    baz: 'baz'
  };

  const result = merge(first, second);

  t.deepEqual(result, {
    ...first,
    ...second
  });
});
