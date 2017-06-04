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
import isNull from 'src/_utils/isNull';

test('if isNull tests if an object is null', (t) => {
  t.false(isNull(ARRAY));
  t.false(isNull(BOOLEAN));
  t.false(isNull(DECIMAL));
  t.false(isNull(FUNCTION));
  t.false(isNull(OBJECT));
  t.false(isNull(STRING));
  t.false(isNull(NEGATIVE_INTEGER));
  t.false(isNull(POSITIVE_INTEGER));
  t.false(isNull(UNDEFINED));
  t.false(isNull(NAN));

  t.true(isNull(NULL));
});
