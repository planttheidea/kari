// test
import test from 'ava';

// src
import findIndex from 'src/findIndex';

test('if findIndex will find the index of the item in the array that matches', (t) => {
  const items = [
    {
      foo: 'foo'
    }, {
      foo: 'bar'
    }, {
      foo: 'baz'
    }
  ];
  const method = (item) => {
    return item.foo === 'bar';
  };

  const result = findIndex(method)(items);

  t.is(result, 1);
});

test('if findIndex returns -1 if nothing matching is found', (t) => {
  const items = [
    {
      foo: 'foo'
    }, {
      foo: 'bar'
    }, {
      foo: 'baz'
    }
  ];
  const method = (item) => {
    return item.foo === 'blarg';
  };

  const result = findIndex(method, items);

  t.is(result, -1);
});
