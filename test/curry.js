// test
import test from 'ava';
import _ from 'lodash';

// src
import curry, {
  getArgsToPass,
  getAreArgsFilled
} from 'src/curry';
import __ from 'src/__';

test('if curry creates a method that will curry each of the arguments in the method arity', (t) => {
  const method = (a, b, c, d, e) => {
    return [a, b, c, d, e];
  };

  const curried = curry(method);

  t.true(_.isFunction(curried));

  const args = [1, 2, 3, 4, 5];

  const afterCurrying = args.reduce((afterLastArg, arg) => {
    t.true(_.isFunction(afterLastArg));

    return afterLastArg(arg);
  }, curried);

  t.deepEqual(afterCurrying, args);
});

test('if curry creates a method that will accept the full arity in the passing', (t) => {
  const method = (a, b, c, d, e) => {
    return [a, b, c, d, e];
  };

  const curried = curry(method);

  t.true(_.isFunction(curried));

  const args = [1, 2, 3, 4, 5];

  const result = curried(...args);

  t.deepEqual(result, args);
});

test('if curry creates a method that will accept any combination of arity in the passing', (t) => {
  const method = (a, b, c, d, e) => {
    return [a, b, c, d, e];
  };

  const curried = curry(method);

  t.true(_.isFunction(curried));

  const args = [1, 2, 3, 4, 5];

  const results = [
    curried(args[0])(...args.slice(1)),
    curried(args[0])(args[1])(...args.slice(2)),
    curried(args[0])(args[1])(args[2])(...args.slice(3)),
    curried(args[0])(args[1])(args[2])(args[3])(args[4]),
    curried(...args.slice(0, 2))(...args.slice(2)),
    curried(...args.slice(0, 2))(args[2])(...args.slice(3)),
    curried(...args.slice(0, 2))(args[2])(args[3])(args[4]),
    curried(...args.slice(0, 3))(...args.slice(3)),
    curried(...args.slice(0, 3))(args[3])(args[4]),
    curried(...args.slice(0, 4))(args[4])
  ];

  results.forEach((result, index) => {
    t.deepEqual(result, args, index);
  });
});

test('if curry allows for defaults via a custom arity not based on the function arity', (t) => {
  const add = (a, b, c = 1) => {
    return a + b + c;
  };

  const args = [1, 2, 3];
  const arity = args.length;

  const curried = curry(add, arity);

  const afterTwo = curried(...args.slice(0, arity - 1));

  t.true(_.isFunction(afterTwo));

  const result = afterTwo(args[args.length - 1]);
  const expectedResult = args.reduce((sum, num) => {
    return sum + num;
  }, 0);

  t.is(result, expectedResult);
});

test('if getArgsToPass determines the complete args to pass when there are no remaining args after the placeholder', (t) => {
  const originalArgs = [1, __, 3];
  const futureArgs = [2];

  const result = getArgsToPass(originalArgs, [...futureArgs]);
  const expectedResult = originalArgs.map((arg) => {
    return arg !== __ ? arg : futureArgs.shift();
  });

  t.deepEqual(result, expectedResult);
});

test('if getArgsToPass determines the complete args to pass when there are remaining args after the placeholder', (t) => {
  const originalArgs = [1, __, 3];
  const futureArgs = [2, 4];

  const result = getArgsToPass(originalArgs, [...futureArgs]);
  const expectedResult = originalArgs
    .map((arg) => {
      return arg !== __ ? arg : futureArgs.shift();
    })
    .concat(futureArgs);

  t.deepEqual(result, expectedResult);
});

test('if getAreArgsFilled returns false if args length is less than arity', (t) => {
  const args = [1, 2];
  const arity = 3;

  t.false(getAreArgsFilled(args, arity));
});

test('if getAreArgsFilled returns false if args has a placeholder in it', (t) => {
  const args = [1, __, 2];
  const arity = 3;

  t.false(getAreArgsFilled(args, arity));
});
test('if getAreArgsFilled returns true if arity is reached and no placeholders exist', (t) => {
  const args = [1, 2, 3];
  const arity = 3;

  t.true(getAreArgsFilled(args, arity));
});
