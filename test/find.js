// test
import test from 'ava';

// src
import find from 'src/find';

test('if find will find the item in the array that matches', (t) => {
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

  const result = find(method)(items);

  t.is(result, items[1]);
});

test('if find returns undefined if nothing matching is found', (t) => {
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

  const result = find(method, items);

  t.is(result, undefined);
});
