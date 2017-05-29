// test
import test from 'ava';
import fs from 'fs';

// src
import * as index from 'src/index';

const getFiles = () => {
  return fs.readdirSync('./src').filter((file) => {
    return file !== 'index.js' && file !== '_utils';
  });
};

test('if all methods are provided as named exports', (t) => {
  getFiles().forEach((file) => {
    const key = file.replace('.js', '');

    t.true(index.hasOwnProperty(key));
  });
});

test('if default export contains all the individual files', (t) => {
  const kari = index.default;

  getFiles().forEach((file) => {
    const key = file.replace('.js', '');

    t.true(kari.hasOwnProperty(key));
  });
});
