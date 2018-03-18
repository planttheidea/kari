// test
import test from 'ava';
import _ from 'lodash';
import sinon from 'sinon';

// src
import forEach from 'src/forEach';

test('if forEach will iterate over each item in the array and call the method', (t) => {
  const method = sinon.spy();

  const items = [1, 2, 3, 4, 5];

  forEach(method)(items);

  t.is(method.callCount, items.length);
});

test('if forEach will return the items after iterations for chainability', (t) => {
  const items = [1, 2, 3, 4, 5];

  const result = forEach(_.noop, items);

  t.is(result, items);
});

test('if forEach will do the same for objects as arrays', (t) => {
  const items = {
    foo: 'bar',
    bar: 'baz',
    baz: 'foo'
  };

  const method = sinon.spy();

  const result = forEach(method, items);

  t.is(method.callCount, Object.keys(items).length);
  t.is(result, items);
});

test('if forEach will return the original items if not an object or array', (t) => {
  const items = 'foo';

  const method = sinon.spy();

  const result = forEach(method, items);

  t.is(method.callCount, 1);
  t.deepEqual(result, items);
});
