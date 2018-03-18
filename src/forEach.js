// external dependencies
import curry from './curry';

// utils
import {getNormalizedResult} from './_internal/normalize';
import {reduceArray, reduceObject} from './_internal/reduce';

/**
 * @function forEach
 *
 * @description
 * iterate over each item in the collection calling fn
 *
 * @param {function} fn the function to call
 * @param {Array<any>|Object} collection the collection to iterate over
 * @returns {<T>} the original collection
 */
export default curry(function forEach(fn, collection) {
  const handler = function(normalized, value, key, object) {
    fn(value, key, object);

    return normalized;
  };

  return getNormalizedResult(
    collection,
    (normalized) => reduceArray(handler, normalized, normalized),
    (normalized) => reduceObject(handler, normalized, normalized)
  );
});
