// test
import test from 'ava';

// src
import findInArray from 'src/_utils/findInArray';

test('if findInArray will find the item in the array that matches when isIndex is false', (t) => {
  const items = [
    {
      foo: 'foo'
    },
    {
      foo: 'bar'
    },
    {
      foo: 'baz'
    }
  ];
  const method = (item) => {
    return item.foo === 'bar';
  };

  const result = findInArray(method, items, false);

  t.is(result, items[1]);
});

test('if findInArray will find the index in the array that matches when isIndex is true', (t) => {
  const items = [
    {
      foo: 'foo'
    },
    {
      foo: 'bar'
    },
    {
      foo: 'baz'
    }
  ];
  const method = (item) => {
    return item.foo === 'bar';
  };

  const result = findInArray(method, items, true);

  t.is(result, 1);
});

test('if findInArray returns undefined if nothing matching is found and isIndex is false', (t) => {
  const items = [
    {
      foo: 'foo'
    },
    {
      foo: 'bar'
    },
    {
      foo: 'baz'
    }
  ];
  const method = (item) => {
    return item.foo === 'blarg';
  };

  const result = findInArray(method, items, false);

  t.is(result, undefined);
});

test('if findInArray returns -1 if nothing matching is found and isIndex is true', (t) => {
  const items = [
    {
      foo: 'foo'
    },
    {
      foo: 'bar'
    },
    {
      foo: 'baz'
    }
  ];
  const method = (item) => {
    return item.foo === 'blarg';
  };

  const result = findInArray(method, items, true);

  t.is(result, -1);
});
