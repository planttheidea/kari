// test
import test from 'ava';

// src
import gte from 'src/gte';

test('if greater returns true when first numerical value is greater than or equal to the second, false otherwise', (t) => {
  t.true(gte(10)(5));
  t.true(gte(10)(10));

  t.false(gte(10)(12));
});

test('if gte returns true when first string value is greater than or equal to the second, false otherwise', (t) => {
  t.true(gte('foo')('bar'));
  t.true(gte('foo')('foo'));

  t.false(gte('bar')('baz'));
});
