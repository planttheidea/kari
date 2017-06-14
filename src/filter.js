// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isObject from './_utils/isObject';

/**
 * @function filterArray
 *
 * @description
 * filter down the items to those that return truthy based on the call of fn
 *
 * @param {function(*, (number|string), Array<*>): *} fn the method to filter with
 * @param {Array<*>} array the array of items to filter
 * @returns {Array<*>} the filtered items
 */
function filterArray(fn, array) {
  let filteredItems = [],
      index = -1;

  while (++index < array.length) {
    if (fn(array[index], index, array)) {
      filteredItems[filteredItems.length] = array[index];
    }
  }

  return filteredItems;
}

/**
 * @function filterObject
 *
 * @description
 * filter down the items to those that return truthy based on the call of fn
 *
 * @param {function(*, string, Object): *} fn the method to filter with
 * @param {Object} object the array of items to filter
 * @returns {Object} the filtered items
 */
function filterObject(fn, object) {
  const keys = Object.keys(object);

  let filteredObject = {},
      index = -1,
      key;

  while (++index < keys.length) {
    key = keys[index];

    if (fn(object[key], key, object)) {
      filteredObject[key] = object[key];
    }
  }

  return filteredObject;
}

/**
 * @function filter
 *
 * @description
 * filter down the collection to those that return truthy based on the call of fn
 *
 * @param {function(*, (number|string), (Array<*>|Object): *} fn the method to filter with
 * @param {Array<*>|Object} collection the collection of items to filter
 * @returns {Array<*>|Object} the filtered collection
 */
export default curry(function filter(fn, collection) {
  return isObject(collection) ? filterObject(fn, collection) : filterArray(fn, coalesceToArray(collection));
});
