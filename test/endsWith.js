// test
import test from 'ava';

// src
import endsWith from 'src/endsWith';

test('if endsWith will return true if the last item in the array matches the value', (t) => {
  const value = {};
  const array = [{}, {}, value];

  const result = endsWith(value)(array);

  t.true(result);
});

test('if endsWith will return false if the last item in the array does not match the value', (t) => {
  const value = {};
  const array = [{}, value, {}];

  const result = endsWith(value)(array);

  t.false(result);
});

test('if endsWith returns false when the array is empty', (t) => {
  const value = {};
  const array = [];

  const result = endsWith(value)(array);

  t.false(result);
});

test('if endsWith will return true if the last letter in the word matches the value', (t) => {
  const value = 'f';
  const string = `oo${value}`;

  const result = endsWith(value)(string);

  t.true(result);
});

test('if endsWith will return false if the last letter in the word does not match the value', (t) => {
  const value = 'f';
  const string = `o${value}o`;

  const result = endsWith(value)(string);

  t.false(result);
});

test('if endsWith returns false when the string is empty', (t) => {
  const value = {};
  const string = '';

  const result = endsWith(value)(string);

  t.false(result);
});
