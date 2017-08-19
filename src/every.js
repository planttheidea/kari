// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isObject from './_utils/isObject';

/**
 * @function everyArray
 *
 * @description
 * does all of the calls to fn with the items in the array return truthy
 *
 * @param {function} fn the function to test with
 * @param {Array<*>} array the array to test
 * @returns {boolean} does all of the items in the array match fn
 */
function everyArray(fn, array) {
  let index = 0;

  while (index < array.length) {
    if (!fn(array[index], index, array)) {
      return false;
    }

    index++;
  }

  return true;
}

/**
 * @function everyObject
 *
 * @description
 * does all of the calls to fn with the items in the object return truthy
 *
 * @param {function} fn the function to test with
 * @param {Array<*>} object the object to test
 * @param {Array<keys>} keys the keys of the object to iterate over
 * @returns {boolean} does all of the items in the object match fn
 */
function everyObject(fn, object, keys) {
  let index = 0,
      key;

  while (index < keys.length) {
    key = keys[index];

    if (!fn(object[key], key, object)) {
      return false;
    }

    index++;
  }

  return true;
}

/**
 * @function every
 *
 * @description
 * does every iteration of collection return truthy based on passing to fn
 *
 * @param {function(*, (number|string), (Array<*>|Object)): *} fn the method to test with
 * @param {Array<*>|Object} collection the collection of items to test
 * @returns {boolean} does every iteration match
 */
export default curry(function every(fn, collection) {
  const keys = Object.keys(collection);

  if (!keys.length) {
    return true;
  }

  return isObject(collection) ? everyObject(fn, collection, keys) : everyArray(fn, coalesceToArray(collection));
});
