// test
import test from 'ava';
import sinon from 'sinon';

// src
import forEachObject from 'src/_utils/forEachObject';

test('if forEachObject will iterate over each item in the array and call the method', (t) => {
  const items = {
    foo: 'bar',
    bar: 'baz',
    baz: 'foo'
  };

  const method = sinon.spy();

  const result = forEachObject(method, items);

  t.is(method.callCount, Object.keys(items).length);
  t.is(result, items);
});
