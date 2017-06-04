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
import isNAN from 'src/_utils/isNAN';

test('if isNAN tests if an object is a number', (t) => {
  t.false(isNAN(ARRAY));
  t.false(isNAN(BOOLEAN));
  t.false(isNAN(DECIMAL));
  t.false(isNAN(FUNCTION));
  t.false(isNAN(OBJECT));
  t.false(isNAN(STRING));
  t.false(isNAN(NEGATIVE_INTEGER));
  t.false(isNAN(POSITIVE_INTEGER));
  t.false(isNAN(UNDEFINED));

  t.true(isNAN(NAN));
});
