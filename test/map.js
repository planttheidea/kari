// test
import test from 'ava';
import sinon from 'sinon';

// src
import map from 'src/map';

test('if map will map the values resulting from the function to a new array (curried)', (t) => {
  const items = [1, 2, 3, 4, 5];
  const method = (item, index) => {
    return {
      [index]: item
    };
  };

  const result = map(method)(items);
  const expectedResult = items.map(method);

  t.not(result, items);
  t.deepEqual(result, expectedResult);
});

test('if map will map the values resulting from the function to a new array (full arity)', (t) => {
  const items = [1, 2, 3, 4, 5];
  const method = (item, index) => {
    return {
      [index]: item
    };
  };

  const result = map(method, items);
  const expectedResult = items.map(method);

  t.not(result, items);
  t.deepEqual(result, expectedResult);
});

test('if map does the same thing for objects as arrays', (t) => {
  const items = {
    foo: 'bar',
    bar: 'baz',
    baz: 'foo'
  };
  const method = (value, key) => {
    return key;
  };

  const result = map(method, items);

  t.not(result, items);
  t.deepEqual(result, {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz'
  });
});

test('if map returns the items passed mapped as an array if not an object or array', (t) => {
  const items = 'foo';
  const method = (item, index) => {
    return {
      [index]: item
    };
  };

  const result = map(method, items);

  t.deepEqual(result, [
    {0: items}
  ]);
});
