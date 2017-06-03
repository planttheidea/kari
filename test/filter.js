// test
import test from 'ava';
import sinon from 'sinon';

// src
import filter from 'src/filter';

test('if filter will filter the values resulting from the function to a new array', (t) => {
  const items = [1, 2, 3, 4, 5];
  const method = (item) => {
    return item % 2 === 0;
  };

  const result = filter(method)(items);
  const expectedResult = items.filter(method);

  t.not(result, items);
  t.deepEqual(result, expectedResult);
});

test('if filter does the same thing for objects as arrays', (t) => {
  const items = {
    foo: 'bar',
    bar: 'baz',
    baz: 'foo'
  };
  const method = (value, key) => {
    return value === 'foo' || key === 'foo';
  };

  const result = filter(method, items);

  t.not(result, items);
  t.deepEqual(result, {
    foo: 'bar',
    baz: 'foo'
  });
});

test('if filter returns the items passed as an array if not an object or array and returns truthy', (t) => {
  const items = 'foo';
  const method = sinon.stub().returns(true);

  const result = filter(method, items);

  t.true(method.calledOnce);
  t.deepEqual(result, [items]);
});

test('if filter returns an empty array if not an object or array and returns falsy', (t) => {
  const items = 'foo';
  const method = sinon.stub().returns(false);

  const result = filter(method, items);

  t.true(method.calledOnce);
  t.deepEqual(result, []);
});
