// test
import test from 'ava';

// src
import findLastIndex from 'src/findLastIndex';
import * as findLastKey from 'src/findLastKey';

test('if findLastIndex is the same method as findLastKey', (t) => {
  t.is(findLastIndex, findLastKey.default);
});
