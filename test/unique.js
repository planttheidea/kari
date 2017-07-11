// test
import test from 'ava';

// src
import unique from 'src/unique';

test('if unique will reduce the array based on value', (t) => {
  const array = ['one', 'two', 'one', 'three', 'two'];

  const result = unique(array);

  t.deepEqual(result, ['one', 'two', 'three']);
});

test('if unique will reduce the object based on value', (t) => {
  const object = {one: 1, two: 2, alsoOne: 1, three: 3, alsoTwo: 2};

  const result = unique(object);

  t.deepEqual(result, {one: 1, two: 2, three: 3});
});
