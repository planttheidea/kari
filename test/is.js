// test
import test from 'ava';

// src
import is from 'src/is';

test('if is checks if a value has the constructor passed when the constructor is a function', (t) => {
  t.true(is(String)('foo'));
  t.false(is(String)(123));

  t.true(is(Number)(123));
  t.false(is(Number)('foo'));

  t.true(is(Array)([]));
  t.false(is(Array)({}));

  t.true(is(Object)({}));
  t.false(is(Object)([]));

  t.true(is(Function)(() => {}));
  t.false(is(Function)('foo'));
});

test('if is checks for strict equality when the constructor passed is not a function', (t) => {
  t.true(is('foo')('foo'));
  t.false(is('foo')('bar'));

  t.true(is(123)(123));
  t.false(is(123)(321));
});

test('if is checks if both the constructor and the value are NaN', (t) => {
  t.true(is(NaN)(NaN));
  t.false(is(NaN)(123));
});
