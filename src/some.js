// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isObject from './_utils/isObject';

/**
 * @function someArray
 *
 * @description
 * does some of the calls to fn with the items in the array return truthy
 *
 * @param {function} fn the function to test with
 * @param {Array<*>} array the array to test
 * @returns {boolean} does any of the items in the array match fn
 */
function someArray(fn, array) {
  let index = -1;

  while (++index < array.length) {
    if (fn(array[index], index, array)) {
      return true;
    }
  }

  return false;
}

/**
 * @function someObject
 *
 * @description
 * does some of the calls to fn with the items in the object return truthy
 *
 * @param {function} fn the function to test with
 * @param {Array<*>} object the object to test
 * @param {Array<keys>} keys the keys of the object to iterate over
 * @returns {boolean} does any of the items in the object match fn
 */
function someObject(fn, object, keys) {
  let index = -1,
      key;

  while (++index < keys.length) {
    key = keys[index];

    if (fn(object[key], key, object)) {
      return true;
    }
  }

  return false;
}

/**
 * @function some
 *
 * @description
 * does any of the iteration of collection return truthy based on passing to fn
 *
 * @param {function(*, (number|string), (Array<*>|Object)): *} fn the method to test with
 * @param {Array<*>|Object} collection the collection of items to test
 * @returns {boolean} does any iteration match
 */
export default curry(function some(fn, collection) {
  const keys = Object.keys(collection);

  if (!keys.length) {
    return true;
  }

  return isObject(collection) ? someObject(fn, collection, keys) :
    someArray(fn, coalesceToArray(collection));
});
