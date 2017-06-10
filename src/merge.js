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
 * shallowly merge two items into a new item modeled after the first
 *
 * @param {Array<*>|Object} item1 the first item to merge
 * @param {Array<*>|Object} item2 the second item to merge
 * @returns {Array<*>|Object} the merged items
 */
export default curry(function merge(item1, item2) {
  return isObject(item1) ? mergeObjects(item1, item2) : mergeArrays(coalesceToArray(item1), coalesceToArray(item2));
});
