// test
import test from 'ava';

// src
import ascend from 'src/ascend';

test('if ascend will return 1 when the value returned from the first call is greater than the second', (t) => {
  const getter = (string) => {
    return string.length;
  };
  const first = 'foo';
  const second = 'ba';

  const result = ascend(getter)(first)(second);

  t.is(result, 1);
});

test('if ascend will return -1 when the value returned from the first call is less than the second', (t) => {
  const getter = (string) => {
    return string.length;
  };
  const first = 'fo';
  const second = 'bar';

  const result = ascend(getter)(first)(second);

  t.is(result, -1);
});

test('if ascend will return 0 when the value returned from the first call is equal to the second', (t) => {
  const getter = (string) => {
    return string.length;
  };
  const first = 'foo';
  const second = 'bar';

  const result = ascend(getter)(first)(second);

  t.is(result, 0);
});
