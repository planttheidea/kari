// test
import test from 'ava';

// src
import notBy from 'src/notBy';

test('if notBy returns the falsiness returned by the call to fn with value', (t) => {
  const fn = (object) => {
    return object === 'foo';
  };

  t.false(notBy(fn, 'foo'));
  t.true(notBy(fn, 'bar'));
});
