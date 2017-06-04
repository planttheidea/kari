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
import isPositiveInteger from 'src/_utils/isPositiveInteger';

test('if isPositiveInteger tests if an object is an integer', (t) => {
  t.false(isPositiveInteger(ARRAY));
  t.false(isPositiveInteger(BOOLEAN));
  t.false(isPositiveInteger(DECIMAL));
  t.false(isPositiveInteger(FUNCTION));
  t.false(isPositiveInteger(NAN));
  t.false(isPositiveInteger(NEGATIVE_INTEGER));
  t.false(isPositiveInteger(STRING));
  t.false(isPositiveInteger(OBJECT));
  t.false(isPositiveInteger(UNDEFINED));

  t.true(isPositiveInteger(POSITIVE_INTEGER));
});
