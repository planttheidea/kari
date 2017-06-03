// test
import test from 'ava';
import {
  ARRAY,
  BOOLEAN,
  DECIMAL,
  FUNCTION,
  NEGATIVE_INTEGER,
  OBJECT,
  POSITIVE_INTEGER,
  STRING,
  UNDEFINED
} from 'test/helpers/_typeCheckValues';

// src
import isObject from 'src/_utils/isObject';

test('if isObject tests if an object is a number', (t) => {
  t.false(isObject(ARRAY));
  t.false(isObject(BOOLEAN));
  t.false(isObject(DECIMAL));
  t.false(isObject(FUNCTION));
  t.false(isObject(STRING));
  t.false(isObject(NEGATIVE_INTEGER));
  t.false(isObject(POSITIVE_INTEGER));
  t.false(isObject(UNDEFINED));

  t.true(isObject(OBJECT));
});
