// test
import test from 'ava';
import sinon from 'sinon';

// src
import forEachArray from 'src/_utils/forEachArray';

test('if forEachArray will iterate over each item in the array and call the method', (t) => {
  const method = sinon.spy();

  const items = [1, 2, 3, 4, 5];

  forEachArray(method, items);

  t.is(method.callCount, items.length);
});
