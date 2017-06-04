// test
import test from 'ava';

// src
import lt from 'src/lt';

test('if lt returns true when first numerical value is less than the second, false otherwise', (t) => {
  t.true(lt(5)(10));

  t.false(lt(12)(10));
  t.false(lt(10)(10));
});

test('if lt returns true when first string value is less than the second, false otherwise', (t) => {
  t.true(lt('bar')('foo'));

  t.false(lt('baz')('bar'));
  t.false(lt('foo')('foo'));
});
