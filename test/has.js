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

test('if has correctly determines when the nested path exists in the array', (t) => {
  const array = ['foo', {bar: 'baz'}];

  t.true(has('[1].bar')(array));
  t.false(has('[2].baz')(array));
});

test('if has correctly determines when the nested path exists in the object', (t) => {
  const object = {foo: ['bar', {baz: 'baz'}]};

  t.true(has('foo[1].baz')(object));
  t.false(has('foo[0].baz')(object));
});
