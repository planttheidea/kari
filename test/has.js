// test
import test from 'ava';

// src
import has from 'src/has';

test('if has correctly determines if an array has an index', (t) => {
  const array = ['foo'];

  t.true(has(0)(array));
  t.false(has(1)(array));
});

test('if has correctly determines if an object has a key', (t) => {
  const object = {
    foo: 'bar'
  };

  t.true(has('foo')(object));
  t.false(has('bar')(object));
});

test('if has returns false if the object is null or undefined', (t) => {
  t.false(has('foo')(null));
  t.false(has('bar')(undefined));
});
