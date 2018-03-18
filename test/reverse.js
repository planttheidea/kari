// test
import test from 'ava';

// src
import reverse from 'src/reverse';

test('if reverse will reverse the order of the string', (t) => {
  const collection = 'foo';

  const result = reverse(collection);

  t.not(result, collection);
  t.is(result, 'oof');
});

test('if reverse will reverse the order of the array', (t) => {
  const collection = ['foo', 'bar', 'baz'];

  const result = reverse(collection);

  t.not(result, collection);
  t.deepEqual(result, ['baz', 'bar', 'foo']);
});

test('if reverse will reverse the order of the object', (t) => {
  const collection = {one: 'foo', two: 'bar', three: 'baz'};

  const result = reverse(collection);

  t.not(result, collection);
  t.deepEqual(result, {three: 'baz', two: 'bar', one: 'foo'});
});
