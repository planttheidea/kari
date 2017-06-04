// test
import test from 'ava';
import {
  ARRAY,
  BOOLEAN,
  DECIMAL,
  FUNCTION,
  NAN,
  NULL,
  OBJECT,
  POSITIVE_INTEGER,
  STRING,
  UNDEFINED
} from 'test/helpers/_typeCheckValues';

// src
import getObjectClass from 'src/_utils/getObjectClass';

test('if getObjectClass returns the correct string if null', (t) => {
  const result = getObjectClass(NULL);

  t.is(result, 'Null');
});

test('if getObjectClass returns the correct string if undefined', (t) => {
  const result = getObjectClass(UNDEFINED);

  t.is(result, 'Undefined');
});

test('if getObjectClass returns the correct string if a specific object class', (t) => {
  const array = getObjectClass(ARRAY);
  const boolean = getObjectClass(BOOLEAN);
  const decimal = getObjectClass(DECIMAL);
  const fn = getObjectClass(FUNCTION);
  const nan = getObjectClass(NAN);
  const object = getObjectClass(OBJECT);
  const integer = getObjectClass(POSITIVE_INTEGER);
  const string = getObjectClass(STRING);

  t.is(array, 'Array');
  t.is(boolean, 'Boolean');
  t.is(decimal, 'Number');
  t.is(fn, 'Function');
  t.is(nan, 'Number');
  t.is(object, 'Object');
  t.is(integer, 'Number');
  t.is(string, 'String');
});
