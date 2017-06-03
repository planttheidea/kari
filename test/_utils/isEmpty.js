// test
import test from 'ava';
import {
  ARRAY,
  BOOLEAN,
  EMPTY_STRING,
  NULL,
  OBJECT,
  UNDEFINED,
  ZERO
} from 'test/helpers/_typeCheckValues';

// src
import isEmpty from 'src/_utils/isEmpty';

test('if isEmpty returns true if the object is falsy', (t) => {
  t.true(isEmpty(NULL));
  t.true(isEmpty(BOOLEAN));
  t.true(isEmpty(ZERO));
  t.true(isEmpty(EMPTY_STRING));
  t.true(isEmpty(UNDEFINED));
});

test('if isEmpty returns true if the object is an array with no length', (t) => {
  t.true(isEmpty(ARRAY));
});

test('if isEmpty returns true if the object is an object without any keys', (t) => {
  t.true(isEmpty(OBJECT));
});
