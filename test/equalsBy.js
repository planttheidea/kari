// test
import test from 'ava';

// src
import equalsBy from 'src/equalsBy';

test('if equalsBy determines if the items are equal based on fn being called with each value', (t) => {
  const fn = (item) => {
    return item === 'foo';
  };

  t.true(equalsBy(fn, 'foo', 'foo'));
  t.false(equalsBy(fn, 'foo', 'bar'));
});
