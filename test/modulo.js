// test
import test from 'ava';

// src
import modulo from 'src/modulo';

test('if modulo will get the modulo of the first number divided by the second number passed', (t) => {
  const first = 10;
  const second = 4;

  const result = modulo(first)(second);

  const jsMod = first % second;
  const expectedResult = ~~(jsMod >= 0 ? jsMod : jsMod + second);

  t.is(result, expectedResult);
});

test('if modulo will get the modulo of the first number divided by the second number passed when the first number is negative', (t) => {
  const first = -10;
  const second = 4;

  const result = modulo(first)(second);

  const jsMod = first % second;
  const expectedResult = ~~(jsMod >= 0 ? jsMod : jsMod + second);

  t.is(result, expectedResult);
});

test('if modulo will return NaN if the modulus is negative', (t) => {
  const first = 10;
  const second = -4;

  const result = modulo(first)(second);

  t.is(result, NaN);
});

test('if modulo will return NaN if the modulus is zero', (t) => {
  const first = 10;
  const second = 0;

  const result = modulo(first)(second);

  t.is(result, NaN);
});

test('if modulo will return NaN if the denominator is a decimal', (t) => {
  const first = 10.2;
  const second = 4;

  const result = modulo(first)(second);

  t.is(result, NaN);
});

test('if modulo will return NaN if the modulus is a decimal', (t) => {
  const first = 10;
  const second = 4.2;

  const result = modulo(first)(second);

  t.is(result, NaN);
});
