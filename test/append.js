// test
import test from 'ava';

// src
import append from 'src/append';

test('if append will add an item to the end of the array', (t) => {
  const array = [1, 2, 3];
  const item = 'x';

  const result = append(item)(array);

  t.not(result, array);
  t.deepEqual(result, [...array, item]);
});
