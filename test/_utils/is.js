// test
import test from 'ava';

// src
import * as is from 'src/_utils/is';

const array = [];
const boolean = true;
const decimal = 123.456;
const func = () => {};
const string = 'foo';
const negativeInteger = -123;
const positiveInteger = 123;
const object = {};
const undef = undefined;

test('if isArray is equal to the global Array isArray', (t) => {
  t.is(is.isArray, Array.isArray);
});

test('if isString tests if an object is a string', (t) => {
  t.false(is.isString(array));
  t.false(is.isString(boolean));
  t.false(is.isString(decimal));
  t.false(is.isString(func));
  t.false(is.isString(negativeInteger));
  t.false(is.isString(positiveInteger));
  t.false(is.isString(object));
  t.false(is.isString(undef));

  t.true(is.isString(string));
});

test('if isNumber tests if an object is a number', (t) => {
  t.false(is.isNumber(array));
  t.false(is.isNumber(boolean));
  t.false(is.isNumber(func));
  t.false(is.isNumber(string));
  t.false(is.isNumber(object));
  t.false(is.isNumber(undef));

  t.true(is.isNumber(decimal));
  t.true(is.isNumber(negativeInteger));
  t.true(is.isNumber(positiveInteger));
});

test('if isInteger tests if an object is an integer', (t) => {
  t.false(is.isInteger(array));
  t.false(is.isInteger(boolean));
  t.false(is.isInteger(decimal));
  t.false(is.isInteger(func));
  t.false(is.isInteger(string));
  t.false(is.isInteger(object));
  t.false(is.isInteger(undef));

  t.true(is.isInteger(negativeInteger));
  t.true(is.isInteger(positiveInteger));
});

test('if isPositiveInteger tests if an object is a positive integer', (t) => {
  t.false(is.isPositiveInteger(array));
  t.false(is.isPositiveInteger(boolean));
  t.false(is.isPositiveInteger(decimal));
  t.false(is.isPositiveInteger(func));
  t.false(is.isPositiveInteger(negativeInteger));
  t.false(is.isPositiveInteger(string));
  t.false(is.isPositiveInteger(object));
  t.false(is.isPositiveInteger(undef));

  t.true(is.isPositiveInteger(positiveInteger));
});

test('if isObject tests if an object is a object', (t) => {
  t.false(is.isObject(array));
  t.false(is.isObject(boolean));
  t.false(is.isObject(decimal));
  t.false(is.isObject(func));
  t.false(is.isObject(string));
  t.false(is.isObject(negativeInteger));
  t.false(is.isObject(positiveInteger));
  t.false(is.isObject(undef));

  t.true(is.isObject(object));
});

test('if isEmpty returns true if the object is falsy', (t) => {
  t.true(is.isEmpty(null));
  t.true(is.isEmpty(false));
  t.true(is.isEmpty(0));
  t.true(is.isEmpty(''));
  t.true(is.isEmpty(undef));
});

test('if isEmpty returns true if the object is an array with no length', (t) => {
  t.true(is.isEmpty([]));
});

test('if isEmpty returns true if the object is an object without any keys', (t) => {
  t.true(is.isEmpty({}));
});
