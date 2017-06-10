// test
import test from 'ava';

// src
import findKey from 'src/findKey';
import findIndex from 'src/findIndex';

test('if findKey is the same function as findIndex', (t) => {
  t.is(findKey, findIndex);
});
