// test
import test from 'ava';

// src
import omit from 'src/omit';

test('if omit will omit the indices out of the array', (t) => {
  const items = [1, 2, 3, 4, 5, 6];
  const keys = [1, 4];

  const result = omit(keys)(items);

  t.deepEqual(result, items.filter((ignored, index) => {
    return !~keys.indexOf(index);
  }));
});

test('if omit will omit the keys out of the object', (t) => {
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

test('if omit will return the original object as an array if not an array or object', (t) => {
  const items = 'foo';
  const keys = ['toString'];

  const result = omit(keys, items);

  t.deepEqual(result, [items]);
});

test('if omit will remove the nested item from the array', (t) => {
  const items = [{foo: ['bar', 'baz']}];
  const keys = ['[0]foo[0]'];

  const result = omit(keys, items);

  t.deepEqual(result, [
    {
      foo: ['baz']
    }
  ]);
});

test('if omit will remove the nested keys from the object', (t) => {
  const items = {foo: ['bar', {baz: 'baz'}]};
  const keys = ['foo[1].baz'];

  const result = omit(keys, items);

  t.deepEqual(result, {
    foo: [
      'bar',
      {}
    ]
  });
});
