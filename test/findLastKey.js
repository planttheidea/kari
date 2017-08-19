// test
import test from 'ava';

// src
import findLastKey from 'src/findLastKey';
import findLastIndex from 'src/findLastIndex';

test('if findLastKey is the same function as findLastIndex', (t) => {
  t.is(findLastKey, findLastIndex);
});
