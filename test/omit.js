// test
import test from 'ava';

// src
import omit from 'src/omit';

test('if omit will omit the indices out of the array (curried)', (t) => {
  const items = [1, 2, 3, 4, 5, 6];
  const keys = [1, 4];

  const result = omit(keys)(items);

  t.deepEqual(result, items.filter((ignored, index) => {
    return !~keys.indexOf(index);
  }));
});

test('if omit will omit the indices out of the array (full arity)', (t) => {
  const items = [1, 2, 3, 4, 5, 6];
  const keys = [1, 4];

  const result = omit(keys, items);

  t.deepEqual(result, items.filter((ignored, index) => {
    return !~keys.indexOf(index);
  }));
});

test('if omit will omit the keys out of the object (curried)', (t) => {
  const items = {
    foo: 'bar',
    bar: 'baz',
    baz: 'foo'
  };
  const keys = ['foo', 'baz'];

  const result = omit(keys)(items);

  t.deepEqual(result, {
    bar: 'baz'
  });
});

test('if omit will omit the keys out of the object (full arity)', (t) => {
  const items = {
    foo: 'bar',
    bar: 'baz',
    baz: 'foo'
  };
  const keys = ['foo', 'baz'];

  const result = omit(keys, items);

  t.deepEqual(result, {
    bar: 'baz'
  });
});

test('if omit will return the original object if not an array or object', (t) => {
  const items = 'foo';
  const keys = ['toString'];

  const result = omit(keys, items);

  t.is(result, items);
});
