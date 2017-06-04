// test
import test from 'ava';
import {
  ARRAY,
  BOOLEAN,
  DECIMAL,
  FUNCTION,
  NAN,
  NEGATIVE_INTEGER,
  NULL,
  OBJECT,
  POSITIVE_INTEGER,
  STRING,
  UNDEFINED
} from 'test/helpers/_typeCheckValues';

// src
import isUndefined from 'src/_utils/isUndefined';

test('if isUndefined tests if an object is undefined', (t) => {
  t.false(isUndefined(ARRAY));
  t.false(isUndefined(BOOLEAN));
  t.false(isUndefined(DECIMAL));
  t.false(isUndefined(FUNCTION));
  t.false(isUndefined(OBJECT));
  t.false(isUndefined(STRING));
  t.false(isUndefined(NEGATIVE_INTEGER));
  t.false(isUndefined(POSITIVE_INTEGER));
  t.false(isUndefined(NAN));
  t.false(isUndefined(NULL));

  t.true(isUndefined(UNDEFINED));
});
