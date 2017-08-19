// test
import test from 'ava';
import {getFiles} from 'test/helpers/_methods';

test('if all the files in src have been tested', (t) => {
  const srcFiles = getFiles('./src');
  const testFiles = getFiles('./test');

  t.deepEqual(srcFiles, testFiles);
});

test('if all the files in src/_utils have been tested', (t) => {
  const srcFiles = getFiles('./src/_utils');
  const testFiles = getFiles('./test/_utils');

  t.deepEqual(srcFiles, testFiles);
});
