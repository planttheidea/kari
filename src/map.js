// external dependencies
import curry from './curry';

// utils
import {getNormalizedResult} from './_internal/normalize';
import {reduceArray, reduceObject} from './_internal/reduce';

export default curry(function map(fn, collection) {
  return getNormalizedResult(
    collection,
    (normalized) =>
      reduceArray(
        function(mappedArray, value, key, array) {
          mappedArray.push(fn(value, key, array));

          return mappedArray;
        },
        [],
        normalized
      ),
    (normalized) =>
      reduceObject(
        function(mappedObject, value, key, object) {
          mappedObject[key] = fn(value, key, object);

          return mappedObject;
        },
        {},
        normalized
      )
  );
});
