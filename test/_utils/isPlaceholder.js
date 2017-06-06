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
import isPlaceholder from 'src/_utils/isPlaceholder';
import __ from 'src/__';

test('if isPlaceholder tests if an object is the placeholder value', (t) => {
  t.false(isPlaceholder(ARRAY));
  t.false(isPlaceholder(BOOLEAN));
  t.false(isPlaceholder(FUNCTION));
  t.false(isPlaceholder(NAN));
  t.false(isPlaceholder(STRING));
  t.false(isPlaceholder(OBJECT));
  t.false(isPlaceholder(UNDEFINED));
  t.false(isPlaceholder(DECIMAL));
  t.false(isPlaceholder(NEGATIVE_INTEGER));
  t.false(isPlaceholder(POSITIVE_INTEGER));

  t.true(isPlaceholder(__));
});
