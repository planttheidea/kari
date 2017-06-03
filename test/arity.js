// test
import test from 'ava';

// src
import arity from 'src/arity';

test('if arity will create a method that limits the arity to the value passed', (t) => {
  const fn = (a, b, c) => {
    return [a, b, c];
  };
  const size = 2;
  const args = [1, 2, 3];

  const result = arity(size)(fn)(...args);

  t.notDeepEqual(result, args);

  const expectedResult = args.map((arg, index) => {
    return index < size ? arg : undefined;
  });

  t.deepEqual(result, expectedResult);
});

test('if arity will create a method that extends the arity to the value passed (curried)', (t) => {
  const fn = (a, b, c, ...otherArgs) => {
    return [a, b, c, ...otherArgs];
  };
  const size = 4;
  const args = [1, 2, 3];

  const result = arity(size)(fn)(...args);

  t.notDeepEqual(result, args);

  let expectedResult = [],
      index = -1;

  while (++index < size) {
    expectedResult[index] = args[index];
  }

  t.deepEqual(result, expectedResult);
});
