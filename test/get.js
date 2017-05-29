// test
import test from 'ava';

// src
import get from 'src/get';

test('if get will get the shallow key value (curried)', (t) => {
  const value = 'foo';

  const key = 'shallow';
  const object = {
    shallow: value,
    deeply: [
      {
        nested: [
          {
            value
          }
        ]
      }
    ]
  };

  const result = get(key)(object);

  t.is(result, value);
});

test('if get will get the shallow key value (full arity)', (t) => {
  const value = 'foo';

  const key = 'shallow';
  const object = {
    shallow: value,
    deeply: [
      {
        nested: [
          {
            value
          }
        ]
      }
    ]
  };

  const result = get(key, object);

  t.is(result, value);
});

test('if get will get the deep key value (curried)', (t) => {
  const value = 'foo';

  const key = 'deeply[0].nested[0].value';
  const object = {
    shallow: value,
    deeply: [
      {
        nested: [
          {
            value
          }
        ]
      }
    ]
  };

  const result = get(key)(object);

  t.is(result, value);
});

test('if get will get the deep key value (full arity)', (t) => {
  const value = 'foo';

  const key = 'deeply[0].nested[0].value';
  const object = {
    shallow: value,
    deeply: [
      {
        nested: [
          {
            value
          }
        ]
      }
    ]
  };

  const result = get(key, object);

  t.is(result, value);
});

test('if get will return undefined when the path is empty', (t) => {
  const value = 'foo';

  const key = [];
  const object = {
    shallow: value,
    deeply: [
      {
        nested: [
          {
            value
          }
        ]
      }
    ]
  };

  const result = get(key, object);

  t.is(result, undefined);
});

test('if get will return undefined when the object is falsy', (t) => {
  const key = 'bar';
  const object = null;

  const result = get(key, object);

  t.is(result, undefined);
});
