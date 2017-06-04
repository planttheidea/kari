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
import isFunction from 'src/_utils/isFunction';

test('if isFunction tests if an object is a number', (t) => {
  t.false(isFunction(ARRAY));
  t.false(isFunction(BOOLEAN));
  t.false(isFunction(DECIMAL));
  t.false(isFunction(OBJECT));
  t.false(isFunction(STRING));
  t.false(isFunction(NEGATIVE_INTEGER));
  t.false(isFunction(POSITIVE_INTEGER));
  t.false(isFunction(UNDEFINED));

  t.true(isFunction(FUNCTION));
});
