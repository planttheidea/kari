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
import isInteger from 'src/_utils/isInteger';

test('if isInteger tests if an object is an integer', (t) => {
  t.false(isInteger(ARRAY));
  t.false(isInteger(BOOLEAN));
  t.false(isInteger(DECIMAL));
  t.false(isInteger(FUNCTION));
  t.false(isInteger(NAN));
  t.false(isInteger(STRING));
  t.false(isInteger(OBJECT));
  t.false(isInteger(UNDEFINED));

  t.true(isInteger(NEGATIVE_INTEGER));
  t.true(isInteger(POSITIVE_INTEGER));
});
