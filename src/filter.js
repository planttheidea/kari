// external dependencies
import curry from './curry';

// utils
import {getNormalizedResult} from './_internal/normalize';
import {reduceObject} from './_internal/reduce';

export default curry(function filter(fn, object) {
  return getNormalizedResult(
    object,
    (normalized) => normalized.filter(fn),
    (normalized) =>
      reduceObject(
        normalized,
        function(mappedObject, value, key, objectBeingMapped) {
          if (fn(objectBeingMapped[key], key, objectBeingMapped)) {
            mappedObject[key] = objectBeingMapped[key];
          }

          return mappedObject;
        },
        {}
      )
  );
});
