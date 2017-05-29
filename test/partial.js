// test
import test from 'ava';
import _ from 'lodash';

// src
import partial from 'src/partial';

test('if partial will create a partial-application method', (t) => {
  const initialArgs = [1, 2, 3];
  const additionalArgs = [4, 5];

  const method = (a, b, c, d, e) => {
    return [a, b, c, d, e];
  };

  const partialed = partial(method, ...initialArgs);

  t.true(_.isFunction(partialed));

  const result = partialed(...additionalArgs);

  t.deepEqual(result, [
    ...initialArgs,
    ...additionalArgs
  ]);
});
