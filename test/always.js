// test
import test from 'ava';
import _ from 'lodash';
import * as types from 'test/helpers/_typeCheckValues';

// src
import always from 'src/always';

test('if always creates a method that always returns the value it was created with', (t) => {
  const value = {};

  const result = always(value);

  t.true(_.isFunction(result));

  Object.keys(types).forEach((key) => {
    t.is(result(types[key]), value);
  });
});
