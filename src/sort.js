// external dependencies
import curry from './curry';

// utils
import {getNormalizedResult} from './_internal/normalize';
import {reduce} from './_internal/reduce';

/**
 * @function sortArray
 *
 * @description
 * return a sorted clone of the array passed
 *
 * @param {function} fn the function to sort by
 * @param {Array<any>} array the array to sort
 * @returns {Array<any>} a sorted clone of the array
 */
function sortArray(fn, array) {
  const clone = array.slice(0);

  clone.sort(fn);

  return clone;
}

/**
 * @function sortObject
 *
 * @description
 * return a sorted clone of the object passed
 *
 * @param {function} fn the function to sort by
 * @param {Object} object the object to sort
 * @returns {Object} a sorted clone of the object
 */
function sortObject(fn, object) {
  const keys = Object.keys(object);

  keys.sort(typeof fn === 'function' ? (a, b) => fn(object[a], object[b]) : undefined);

  return reduce(
    (sortedObject, key) => {
      sortedObject[key] = object[key];

      return sortedObject;
    },
    {},
    keys
  );
}

/**
 * @function sort
 *
 * @description
 * get an immutable sorted version of the collection passed
 *
 * @param {function} fn the function to sort by
 * @param {Array<any>|Object} collection the collection to sort
 * @returns {Array<any>|Object} a sorted clone of the collection
 */
export default curry(function sort(fn, collection) {
  const normalizedFn = typeof fn === 'function' ? fn : undefined;

  return getNormalizedResult(
    collection,
    (normalized) => sortArray(normalizedFn, normalized),
    (normalized) => sortObject(normalizedFn, normalized)
  );
});
