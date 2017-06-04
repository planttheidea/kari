// test
import test from 'ava';

// src
import instanceOf from 'src/instanceOf';

test('if instanceOf returns false if object is falsy', (t) => {
  const object = null;

  t.false(instanceOf(Object)(object));
});

test('if instanceOf tests for direct constructor', (t) => {
  class Foo {}

  const object = new Foo();

  t.true(instanceOf(Foo)(object));
});

test('if instanceOf tests up the ancestry tree', (t) => {
  class Foo {}

  const object = new Foo();

  t.true(instanceOf(Object)(object));
});
