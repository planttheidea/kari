// test
import test from 'ava';

// src
import reverse from 'src/_utils/reverse';

test('if reverse will result in the same thing as .reverse() for an array', (t) => {
  const numbers = [1, 2, 3];
  const strings = ['foo', 'bar', 'baz'];
  const objects = [{foo: 'foo'}, {bar: 'bar'}, {baz: 'baz'}];

  const numberResult = reverse(numbers);

  t.deepEqual(numberResult, numbers.reverse());

  const stringResult = reverse(strings);

  t.deepEqual(stringResult, strings.reverse());

  const objectResult = reverse(objects);

  t.deepEqual(objectResult, objects.reverse());
});

test('if reverse will reverse an object based on the keys', (t) => {
  const original = {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz'
  };

  t.deepEqual(Object.keys(original), ['foo', 'bar', 'baz']);

  const reversed = reverse(original);

  t.deepEqual(Object.keys(reversed), ['baz', 'bar', 'foo']);

  t.deepEqual(original, reversed);
});
