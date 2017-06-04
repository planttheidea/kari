// test
import test from 'ava';

// src
import startsWith from 'src/startsWith';

test('if startsWith will return true if the first item in the array matches the value', (t) => {
  const value = {};
  const array = [value, {}, {}];

  const result = startsWith(value)(array);

  t.true(result);
});

test('if startsWith will return false if the first item in the array does not match the value', (t) => {
  const value = {};
  const array = [{}, value, {}];

  const result = startsWith(value)(array);

  t.false(result);
});

test('if startsWith returns false when the array is empty', (t) => {
  const value = {};
  const array = [];

  const result = startsWith(value)(array);

  t.false(result);
});

test('if startsWith will return true if the first letter in the word matches the value', (t) => {
  const value = 'f';
  const string = `${value}oo`;

  const result = startsWith(value)(string);

  t.true(result);
});

test('if startsWith will return false if the first letter in the word does not match the value', (t) => {
  const value = 'f';
  const string = `o${value}o`;

  const result = startsWith(value)(string);

  t.false(result);
});

test('if startsWith returns false when the string is empty', (t) => {
  const value = {};
  const string = '';

  const result = startsWith(value)(string);

  t.false(result);
});
