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
import isString from 'src/_utils/isString';

test('if isString tests if an object is a string', (t) => {
  t.false(isString(ARRAY));
  t.false(isString(BOOLEAN));
  t.false(isString(DECIMAL));
  t.false(isString(FUNCTION));
  t.false(isString(NEGATIVE_INTEGER));
  t.false(isString(POSITIVE_INTEGER));
  t.false(isString(OBJECT));
  t.false(isString(UNDEFINED));

  t.true(isString(STRING));
});
