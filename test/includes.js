// test
import test from 'ava';

// src
import includes from 'src/includes';

test('if includes checks the array to see if the value is contained', (t) => {
  const value = {};
  const array = ['foo', value, 123];

  t.true(includes(value)(array));
  t.false(includes('bar')(array));
});

test('if includes checks the object to see if the value is contained', (t) => {
  const value = 'bar';
  const object = {
    foo: 'foo',
    bar: value,
    baz: 'baz'
  };

  t.true(includes(value)(object));
  t.false(includes('blah')(object));
});

test('if includes checks the string to see if the value is contained', (t) => {
  const value = 'f';
  const string = 'foo';

  t.true(includes(value)(string));
  t.false(includes('b')(string));
});
