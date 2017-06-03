// test
import test from 'ava';

// src
import identity from 'src/identity';

test('if identity returns the first argument passed and ignores the others', (t) => {
  const value = {};

  const result = identity(value, 'foo', 123);

  t.is(result, value);
});
