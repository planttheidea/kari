// external dependencies
import curry from './curry';

// utils
import {getNormalizedResult} from './_internal/normalize';
import {reduceObject} from './_internal/reduce';

export default curry(function forEach(fn, object) {
  getNormalizedResult(
    object,
    (normalized) => normalized.forEach(fn),
    (normalized) =>
      reduceObject(
        normalized,
        function forEachObjectValue(ignored, value, key, object) {
          fn(value, key, object);

          return ignored;
        },
        null
      )
  );

  return object;
});
