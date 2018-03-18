// test
import test from 'ava';

// src
import pair from 'src/pair';

test('if pair will combine the key and value passed into a pair', (t) => {
  const key = 'key';
  const value = 'value';

  const result = pair(key, value);

  t.deepEqual(result, [key, value]);
});
