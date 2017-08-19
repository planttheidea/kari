// test
import test from 'ava';

// src
import not from 'src/not';

test('if not returns the falsiness of the truthy values passed', (t) => {
  t.false(not(123));
  t.false(not(true));
  t.false(not('foo'));
  t.false(not(/foo/));
  t.false(not({}));
  t.false(not([]));
  t.false(not(new Map()));
  t.false(not(new Set()));
});

test('if not returns the falsiness of the falsy values passed', (t) => {
  t.true(not(0));
  t.true(not(false));
  t.true(not(''));
  t.true(not(null));
  t.true(not(undefined));
});
