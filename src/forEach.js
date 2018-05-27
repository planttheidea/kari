// external dependencies
import curry from './curry';

// utils
import {getNormalizedResult} from './_internal/normalize';
import {reduceArray, reduceObject} from './_internal/reduce';

/**
 * @function createHandler
 *
 * @description
 * create the handler for the normalized result
 *
 * @param {function} fn the function called with each iteration
 * @returns {function} the function used to reduce the function
 */
const createHandler = (fn) =>
  function(normalized, value, key, object) {
    fn(value, key, object);

    return normalized;
  };

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
  const handler = createHandler(fn);

  return getNormalizedResult(
    collection,
    (normalized) => reduceArray(handler, normalized, normalized),
    (normalized) => reduceObject(handler, normalized, normalized)
  );
});
