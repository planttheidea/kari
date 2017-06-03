// test
import test from 'ava';
import {
  ARRAY,
  BOOLEAN,
  DECIMAL,
  FUNCTION,
  NAN,
  NEGATIVE_INTEGER,
  OBJECT,
  POSITIVE_INTEGER,
  STRING,
  UNDEFINED
} from 'test/helpers/_typeCheckValues';

// src
import isNumber from 'src/_utils/isNumber';

test('if isNumber tests if an object is a number', (t) => {
  t.false(isNumber(ARRAY));
  t.false(isNumber(BOOLEAN));
  t.false(isNumber(FUNCTION));
  t.false(isNumber(NAN));
  t.false(isNumber(STRING));
  t.false(isNumber(OBJECT));
  t.false(isNumber(UNDEFINED));

  t.true(isNumber(DECIMAL));
  t.true(isNumber(NEGATIVE_INTEGER));
  t.true(isNumber(POSITIVE_INTEGER));
});
