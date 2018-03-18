// external dependencies
import curry from './curry';

// utils
import {getNormalizedResult} from './_internal/normalize';
import {reduceArray, reduceObject} from './_internal/reduce';

export default curry(function forEach(fn, object) {
  const handler = function(ignored, value, key, object) {
    fn(value, key, object);

    return ignored;
  };

  getNormalizedResult(
    object,
    (normalized) => reduceArray(handler, null, normalized),
    (normalized) => reduceObject(handler, null, normalized)
  );

  return object;
});
