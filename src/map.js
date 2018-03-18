// external dependencies
import curry from './curry';

// utils
import {getNormalizedResult} from './_internal/normalize';
import {reduceObject} from './_internal/reduce';

export default curry(function map(fn, object) {
  return getNormalizedResult(
    object,
    (normalized) => normalized.map(fn),
    (normalized) =>
      reduceObject(
        normalized,
        function(mappedObject, value, key, objectBeingMapped) {
          mappedObject[key] = fn(objectBeingMapped[key], key, objectBeingMapped);

          return mappedObject;
        },
        {}
      )
  );
});
