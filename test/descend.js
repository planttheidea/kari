// test
import test from 'ava';

// src
import descend from 'src/descend';

test('if descend will return -1 when the value returned from the first call is greater than the second', (t) => {
  const getter = (string) => {
    return string.length;
  };
  const first = 'foo';
  const second = 'ba';

  const result = descend(getter)(first)(second);

  t.is(result, -1);
});

test('if descend will return 1 when the value returned from the first call is less than the second', (t) => {
  const getter = (string) => {
    return string.length;
  };
  const first = 'fo';
  const second = 'bar';

  const result = descend(getter)(first)(second);

  t.is(result, 1);
});

test('if descend will return 0 when the value returned from the first call is equal to the second', (t) => {
  const getter = (string) => {
    return string.length;
  };
  const first = 'foo';
  const second = 'bar';

  const result = descend(getter)(first)(second);

  t.is(result, 0);
});
