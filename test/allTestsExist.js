// test
import test from 'ava';
import {getFiles} from 'test/helpers/_methods';

test('if all the files in src have been tested', (t) => {
  const srcFiles = getFiles('./src');
  const testFiles = getFiles('./test');

  t.deepEqual(srcFiles, testFiles);
});

test('if all the files in src/_internal have been tested', (t) => {
  const srcFiles = getFiles('./src/_internal');
  const testFiles = getFiles('./test/_internal');

  t.deepEqual(srcFiles, testFiles);
});
