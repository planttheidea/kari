// test
import test from 'ava';

// src
import lte from 'src/lte';

test('if lte returns true when first numerical value is less than or equal to the second, false otherwise', (t) => {
  t.true(lte(5)(10));
  t.true(lte(10)(10));

  t.false(lte(12)(10));
});

test('if lte returns true when first string value is less than or equal to the second, false otherwise', (t) => {
  t.true(lte('bar')('foo'));
  t.true(lte('foo')('foo'));

  t.false(lte('baz')('bar'));
});
