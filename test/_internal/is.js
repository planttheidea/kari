// test
import test from 'ava';

// src
import * as is from 'src/_internal/is';

const TYPES = {
  arguments: (function() {
    return arguments;
  }('foo', 'bar')),
  array: ['foo', 'bar'],
  boolean: true,
  date: new Date(),
  decimal: 12.3,
  map: new Map(),
  nan: NaN,
  negativeNumber: -123,
  null: null,
  number: 123,
  object: {},
  regexp: new RegExp('foo'),
  set: new Set(),
  string: 'foo',
  symbol: Symbol('foo'),
  undefined
};

const runTests = (t, isMethod, validKeys) => {
  Object.keys(TYPES).forEach((key) => {
    t[!!~validKeys.indexOf(key)](is[isMethod](TYPES[key]), key);
  });
};

test('if isNaN will test if a value is NaN', (t) => {
  runTests(t, 'isNaN', ['nan']);
});

test('if isInteger will test if a value is an integer', (t) => {
  runTests(t, 'isInteger', ['negativeNumber', 'number']);
});

test('if isPrimitive will test if a value is not a complex object', (t) => {
  runTests(t, 'isPrimitive', [
    'boolean',
    'decimal',
    'nan',
    'negativeNumber',
    'null',
    'number',
    'string',
    'symbol',
    'undefined'
  ]);
});

test('if isComplexObject will test if a value is a complex object', (t) => {
  runTests(t, 'isComplexObject', ['arguments', 'array', 'map', 'object', 'set']);
});

test('if isValidLength will test if a value is a valid length', (t) => {
  runTests(t, 'isValidLength', ['number']);
});

test('if isArrayLike will test if a value is an array-like object', (t) => {
  runTests(t, 'isArrayLike', ['arguments', 'array', 'string']);
});

test('if isEqual will test if a value is equal to itself with SameValueZero equality', (t) => {
  Object.keys(TYPES).forEach((key) => {
    Object.keys(TYPES).forEach((otherKey) => {
      t[key === otherKey](is.isEqual(TYPES[key], TYPES[otherKey]), `${key}-${otherKey}`);
    });
  });
});
