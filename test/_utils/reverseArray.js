// test
import test from 'ava';

// src
import reverseArray from 'src/_utils/reverseArray';

test('if reverseArray will result in the same thing as .reverse()', (t) => {
  const numbers = [1, 2, 3];
  const strings = ['foo', 'bar', 'baz'];
  const objects = [{foo: 'foo'}, {bar: 'bar'}, {baz: 'baz'}];

  const numberResult = reverseArray(numbers);

  t.deepEqual(numberResult, numbers.reverse());

  const stringResult = reverseArray(strings);

  t.deepEqual(stringResult, strings.reverse());

  const objectResult = reverseArray(objects);

  t.deepEqual(objectResult, objects.reverse());
});
