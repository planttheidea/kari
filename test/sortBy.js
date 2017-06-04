// test
import test from 'ava';

// src
import get from 'src/get';
import sortBy from 'src/sortBy';

test('if sortBy will return a new array sorted based on the values returned from the function passed', (t) => {
  const items = [
    {foo: 'foo'},
    {foo: 'bar'},
    {foo: 'foo'},
    {foo: 'baz'}
  ];

  const result = sortBy(get('foo'))(items);

  t.not(result, items);

  t.deepEqual(result, [
    {foo: 'bar'},
    {foo: 'baz'},
    {foo: 'foo'},
    {foo: 'foo'}
  ]);
});
