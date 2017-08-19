// test
import test from 'ava';

// src
import set from 'src/set';

test('if set will set the shallow key to be the value passed', (t) => {
  const value = 'foo';

  const key = 'shallow';
  const object = {
    shallow: 'value',
    deeply: [
      {
        nested: [
          {
            value: 'value'
          }
        ]
      }
    ]
  };

  const result = set(key)(value)(object);

  t.deepEqual(result, {
    ...object,
    shallow: value
  });
});

test('if set will set the deep key to be the value passed', (t) => {
  const value = 'foo';

  const key = 'deeply[0].nested[0].value';
  const object = {
    shallow: 'value',
    deeply: [
      {
        nested: [
          {
            value: 'value'
          }
        ]
      }
    ]
  };

  const result = set(key)(value)(object);

  t.deepEqual(result, {
    ...object,
    deeply: [
      {
        nested: [
          {
            value
          }
        ]
      }
    ]
  });
});

test('if set will return the object itself when the path is empty', (t) => {
  const value = 'foo';

  const key = [];
  const object = {
    shallow: 'value',
    deeply: [
      {
        nested: [
          {
            value: 'value'
          }
        ]
      }
    ]
  };

  const result = set(key, value, object);

  t.is(result, object);
});

test('if set will add an object when a descendant is not found and the next path item is a string', (t) => {
  const value = 'foo';

  const key = 'bar.baz';
  const object = {
    bar: 'baz'
  };

  const result = set(key, value, object);

  t.deepEqual(result, {
    bar: {
      baz: value
    }
  });
});

test('if set will add an array when a descendant is not found and the next path item is a number', (t) => {
  const value = 'foo';

  const key = 'bar[0]';
  const object = {
    bar: 'baz'
  };

  const result = set(key, value, object);

  t.deepEqual(result, {
    bar: [value]
  });
});
