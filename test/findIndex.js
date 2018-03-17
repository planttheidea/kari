// test
import test from 'ava';

// src
import findIndex from 'src/findIndex';
import * as findKey from 'src/findKey';

test('if findIndex is the same method as findKey', (t) => {
  t.is(findIndex, findKey.default);
});
