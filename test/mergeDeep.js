// test
import test from 'ava';

// src
import mergeDeep from 'src/mergeDeep';

test('if mergeDeep will deeply merge nested arrays', (t) => {
  const first = [
    ['foo', 'bar'],
    ['baz']
  ];
  const second = [
    ['foo'],
    ['bar', 'baz']
  ];

  const result = mergeDeep(first, second);

  t.deepEqual(result, [
    ['foo', 'bar'],
    ['bar', 'baz']
  ]);
});

test('if mergeDeep will deeply merge nested objects', (t) => {
  const first = {
    foo: {
      bar: 'baz'
    }
  };
  const second = {
    foo: {
      baz: 'bar'
    }
  };

  const result = mergeDeep(first, second);

  t.deepEqual(result, {
    foo: {
      bar: 'baz',
      baz: 'bar'
    }
  });
});

test('if mergeDeep will deeply merge with mixed values in an array', (t) => {
  const first = [
    ['foo'],
    'bar',
    {
      baz: 'baz'
    }
  ];
  const second = [
    'foo',
    {
      bar: 'bar'
    },
    ['baz']
  ];

  const result = mergeDeep(first, second);

  t.deepEqual(result, [
    'foo',
    {
      bar: 'bar'
    },
    ['baz']
  ]);
});

test('if mergeDeep will deeply merge with mixed values in an object', (t) => {
  const first = {
    foo: ['foo'],
    bar: 'bar',
    baz: {
      baz: 'baz'
    }
  };
  const second = {
    foo: 'foo',
    bar: {
      bar: 'bar'
    },
    baz: ['baz']
  };

  const result = mergeDeep(first, second);

  t.deepEqual(result, {
    foo: 'foo',
    bar: {
      bar: 'bar'
    },
    baz: ['baz']
  });
});
