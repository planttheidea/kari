// test
import test from 'ava';
import {
  getFiles
} from 'test/helpers/_methods';

// src
import * as index from 'src/index';

test('if all methods are provided as named exports', (t) => {
  getFiles('./src').forEach((file) => {
    const key = file.replace('.js', '');

    t.true(index.hasOwnProperty(key));
  });
});

test('if default export contains all the individual files', (t) => {
  const kari = index.default;

  getFiles('./src').forEach((file) => {
    const key = file.replace('.js', '');

    t.true(kari.hasOwnProperty(key));
  });
});
