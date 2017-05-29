// test
import test from 'ava';

// src
import pick from 'src/pick';

test('if pick will pick the indices out of the array (curried)', (t) => {
  const items = [1, 2, 3, 4, 5, 6];
  const keys = [1, 4];

  const result = pick(keys)(items);

  t.deepEqual(result, keys.map((index) => {
    return items[index];
  }));
});

test('if pick will pick the indices out of the array (full arity)', (t) => {
  const items = [1, 2, 3, 4, 5, 6];
  const keys = [1, 4];

  const result = pick(keys, items);

  t.deepEqual(result, keys.map((index) => {
    return items[index];
  }));
});

test('if pick will pick the keys out of the object (curried)', (t) => {
  const items = {
    foo: 'bar',
    bar: 'baz',
    baz: 'foo'
  };
  const keys = ['foo', 'baz'];

  const result = pick(keys)(items);

  t.deepEqual(result, {
    foo: items.foo,
    baz: items.baz
  });
});

test('if pick will pick the keys out of the object (full arity)', (t) => {
  const items = {
    foo: 'bar',
    bar: 'baz',
    baz: 'foo'
  };
  const keys = ['foo', 'baz'];

  const result = pick(keys, items);

  t.deepEqual(result, {
    foo: items.foo,
    baz: items.baz
  });
});

test('if pick only applies the keys that exist in the original object', (t) => {
  const items = {
    foo: 'bar',
    bar: 'baz'
  };
  const keys = ['foo', 'baz'];

  const result = pick(keys, items);

  t.deepEqual(result, {
    foo: 'bar'
  });
});

test('if pick returns the original object if it is not an object or array', (t) => {
  const items = 'foo';
  const keys = ['foo', 'baz'];

  const result = pick(keys, items);

  t.is(result, items);
});
