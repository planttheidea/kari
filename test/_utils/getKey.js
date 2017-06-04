// test
import test from 'ava';

// src
import getKey from 'src/_utils/getKey';

test('if getKey will return the key as-is when it is not a number', (t) => {
  const key = 'foo';

  const result = getKey(key);

  t.is(result, key);
});

test('if getKey will return the key as a number when it is a number string', (t) => {
  const key = '1';

  const result = getKey(key);

  t.is(result, parseInt(key, 10));
});
