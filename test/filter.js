// test
import test from 'ava';
import sinon from 'sinon';

// src
import filter from 'src/filter';

test('if filter will filter the values resulting from the function to a new array (curried)', (t) => {
  const items = [1, 2, 3, 4, 5];
  const method = (item) => {
    return item % 2 === 0;
  };

  const result = filter(method)(items);
  const expectedResult = items.filter(method);

  t.not(result, items);
  t.deepEqual(result, expectedResult);
});

test('if filter will filter the values resulting from the function to a new array (full arity)', (t) => {
  const items = [1, 2, 3, 4, 5];
  const method = (item) => {
    return item % 2 === 0;
  };

  const result = filter(method, items);
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

test('if filter returns the items passed if not an object or array', (t) => {
  const items = 'foo';
  const method = sinon.spy();

  const result = filter(method, items);

  t.true(method.notCalled);
  t.is(result, items);
});
