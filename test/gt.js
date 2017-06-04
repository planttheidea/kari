// test
import test from 'ava';

// src
import gt from 'src/gt';

test('if gt returns true when first numerical value is greater than the second, false otherwise', (t) => {
  t.true(gt(10)(5));

  t.false(gt(10)(12));
  t.false(gt(10)(10));
});

test('if gt returns true when first string value is greater than the second, false otherwise', (t) => {
  t.true(gt('foo')('bar'));

  t.false(gt('bar')('baz'));
  t.false(gt('foo')('foo'));
});
