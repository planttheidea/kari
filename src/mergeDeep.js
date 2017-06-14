// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isArray from './_utils/isArray';
import isObject from './_utils/isObject';

/**
 * @function getDeeplyMergedValues
 *
 * @description
 * deeply merge the values passed based on their types
 *
 * @param {*} value1 the first value to merge
 * @param {*} value2 the second value to merge
 * @returns {*} the merged value
 */
function getDeeplyMergedValues(value1, value2) {
  if (isArray(value2)) {
    return !isArray(value1) ? value2 : mergeDeepArrays(value1, value2);  //eslint-disable-line no-use-before-define
  }

  if (isObject(value2)) {
    return !isObject(value1) ? value2 :
      mergeDeepObjects(value1, value2); //eslint-disable-line no-use-before-define
  }

  return value2;
}

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
function mergeDeepArrays(array1, array2) {
  const length = Math.max(array1.length, array2.length);

  let index = -1,
      mergedArray = [];

  while (++index < length) {
    if (index < array2.length) {
      mergedArray[index] = getDeeplyMergedValues(array1[index], array2[index]);

      continue;
    }

    mergedArray[index] = array1[index];
  }

  return mergedArray;
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
function mergeDeepObjects(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  let index = -1,
      mergedObject = {},
      key, indexOfKey;

  while (++index < keys1.length) {
    key = keys1[index];
    indexOfKey = keys2.indexOf(key);

    if (~indexOfKey) {
      mergedObject[key] = getDeeplyMergedValues(object1[key], object2[key]);

      keys2.splice(indexOfKey, 1);

      continue;
    }

    mergedObject[key] = object1[key];
  }

  if (keys2.length) {
    index = -1;

    while (++index < keys2.length) {
      key = keys2[index];

      mergedObject[key] = object2[key];
    }
  }

  return mergedObject;
}

/**
 * @function mergeDeep
 *
 * @description
 * deeply merge two items into a new collection modeled after the first
 *
 * @param {Array<*>|Object} collection1 the first collection to merge
 * @param {Array<*>|Object} collection2 the second collection to merge
 * @returns {Array<*>|Object} the merged collections
 */
export default curry(function mergeDeep(collection1, collection2) {
  return isObject(collection1) ? mergeDeepObjects(collection1, collection2) :
    mergeDeepArrays(coalesceToArray(collection1), coalesceToArray(collection2));
});
