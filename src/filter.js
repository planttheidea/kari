// external dependencies
import curry from './curry';

// utils
import {getNormalizedResult} from './_internal/normalize';
import {reduceArray, reduceObject} from './_internal/reduce';

export default curry(function filter(fn, collection) {
  return getNormalizedResult(
    collection,
    (normalized) =>
      reduceArray(
        function(filteredArray, value, key, array) {
          if (fn(value, key, array)) {
            filteredArray.push(value);
          }

          return filteredArray;
        },
        [],
        normalized
      ),
    (normalized) =>
      reduceObject(
        function(filteredObject, value, key, object) {
          if (fn(value, key, object)) {
            filteredObject[key] = value;
          }

          return filteredObject;
        },
        {},
        normalized
      )
  );
});
