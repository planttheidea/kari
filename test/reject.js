// test
import test from 'ava';
import sinon from 'sinon';

// src
import reject from 'src/reject';

test('if reject will filter the values returning truthy from the function to a new array', (t) => {
  const items = [1, 2, 3, 4, 5];
  const method = (item) => {
    return item % 2 === 0;
  };

  const result = reject(method)(items);
  const expectedResult = items.filter((item) => {
    return item % 2 !== 0;
  });

  t.not(result, items);
  t.deepEqual(result, expectedResult);
});

test('if reject does the same thing for objects as arrays', (t) => {
  const items = {
    foo: 'bar',
    bar: 'baz',
    baz: 'foo'
  };
  const method = (value, key) => {
    return value === 'foo' || key === 'foo';
  };

  const result = reject(method)(items);

  t.not(result, items);
  t.deepEqual(result, {
    bar: 'baz'
  });
});

test('if filter returns the items passed as an array if not an object or array and returns falsy', (t) => {
  const items = 'foo';
  const method = sinon.stub().returns(false);

  const result = reject(method)(items);

  t.true(method.calledOnce);
  t.deepEqual(result, [items]);
});

test('if filter returns an empty array if not an object or array and returns truthy', (t) => {
  const items = 'foo';
  const method = sinon.stub().returns(true);

  const result = reject(method)(items);

  t.true(method.calledOnce);
  t.deepEqual(result, []);
});
