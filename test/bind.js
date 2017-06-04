// test
import test from 'ava';
import _ from 'lodash';

// src
import bind from 'src/bind';

test('if bind will bind the object to the fn passed', (t) => {
  const fn = function() {
    return this;
  };
  const object = {};

  const result = bind(fn)(object);

  t.true(_.isFunction(result));

  t.is(result(), object);
});

test('if bind will bind the object to the fn passed with additional arguments', (t) => {
  const fn = function(...args) {
    return {
      args,
      object: this
    };
  };
  const object = {};
  const args = ['foo', 'bar'];

  const result = bind(fn)(object, args);

  t.true(_.isFunction(result));

  t.deepEqual(result(), {
    args,
    object
  });
});
