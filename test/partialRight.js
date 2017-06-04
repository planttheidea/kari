// test
import test from 'ava';
import _ from 'lodash';

// src
import partialRight from 'src/partialRight';

test('if partialRight will create a partial-application method where the additionalArgs come before the initialArgs when called', (t) => {
  const initialArgs = [1, 2, 3];
  const additionalArgs = [4, 5];

  const method = (a, b, c, d, e) => {
    return [a, b, c, d, e];
  };

  const partialed = partialRight(method, ...initialArgs);

  t.true(_.isFunction(partialed));

  const result = partialed(...additionalArgs);

  t.deepEqual(result, [
    ...additionalArgs,
    ...initialArgs
  ]);
});
