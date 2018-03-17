// external eependencies
import curry from './curry';

// utils
import {assign, normalizeObject} from './_internal/normalize';

/**
 * @function mergeArrays
 *
 * @description
 * shallowly merge two arrays into a new object modeled after the first
 *
 * @param {Array<*>} array1 the first array to merge
 * @param {Array<*>} array2 the second array to merge
 * @returns {Array<*>} the merged arrays
 */
function mergeArrays(array1, array2) {
  return array2.length >= array1.length ? array2.slice(0) : array2.concat(array1.slice(array2.length));
}

/**
 * @function mergeObjects
 *
 * @description
 * shallowly merge two objects into a new object modeled after the first
 *
 * @param {Object} object1 the first object to merge
 * @param {Object} object2 the second object to merge
 * @returns {Object} the merged objects
 */
function mergeObjects(object1, object2) {
  return assign(object1, object2);
}

/**
 * @function merge
 *
 * @description
 * shallowly merge two items into a new collection modeled after the first
 *
 * @param {Array<*>|Object} collection1 the first collection to merge
 * @param {Array<*>|Object} collection2 the second collection to merge
 * @returns {Array<*>|Object} the merged collections
 */
export default curry(function merge(collection1, collection2) {
  const normalizedCollection1 = normalizeObject(collection1);
  const normalizedCollection2 = normalizeObject(collection2);
  const mergeMethod =
    Array.isArray(normalizedCollection1) && Array.isArray(normalizedCollection2) ? mergeArrays : mergeObjects;

  return mergeMethod(normalizedCollection1, normalizedCollection2);
});
