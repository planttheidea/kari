// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isObject from './_utils/isObject';

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
  return array2.length >= array1.length ? [...array2] : [
    ...array2,
    ...array1.slice(array2.length)
  ];
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
  return {
    ...object1,
    ...object2
  };
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
  return isObject(collection1) ? mergeObjects(collection1, collection2) :
    mergeArrays(coalesceToArray(collection1), coalesceToArray(collection2));
});
