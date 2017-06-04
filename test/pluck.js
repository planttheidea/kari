// test
import test from 'ava';

// src
import pluck from 'src/pluck';

test('if pluck will pluck the value at the given key from the objects in the array', (t) => {
  const key = 'foo';

  const items = (new Array(10)).fill(key).map((keyToAssign, index) => {
    return {
      [keyToAssign]: index
    };
  });

  const result = pluck(key)(items);
  const expectedResult = (new Array(10)).fill(key).map((ignored, index) => {
    return index;
  });

  t.deepEqual(result, expectedResult);
});

test('if pluck will not push the value if the key does not exist', (t) => {
  const key = 'foo';

  const items = (new Array(10)).fill(key).map((keyToAssign, index) => {
    return index === 5 ? {} : {
      [keyToAssign]: index
    };
  });

  const result = pluck(key, items);
  const expectedResult = (new Array(10)).fill(key)
    .map((ignored, index) => {
      return index;
    })
    .filter((value) => {
      return value !== 5;
    });

  t.deepEqual(result, expectedResult);
});
