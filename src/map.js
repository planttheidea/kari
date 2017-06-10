// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isObject from './_utils/isObject';

/**
 * @function mapArray
 *
 * @description
 * map the array to a new array based on the returns of the call with fn
 *
 * @param {function(*, number, Array<*>): *} fn the method to map with
 * @param {Array<*>} array the array of items to map
 * @returns {Array<*>} the mapped items
 */
function mapArray(fn, array) {
  let newArray = [],
      index = -1;

  while (++index < array.length) {
    newArray[index] = fn(array[index], index, array);
  }

  return newArray;
}

/**
 * @function mapObject
 *
 * @description
 * map the object to a new object based on the returns of the call with fn
 *
 * @param {function(*, string, Object): *} fn the method to map with
 * @param {Object} object the object of items to map
 * @returns {Object} the mapped items
 */
function mapObject(fn, object) {
  const keys = Object.keys(object);

  let newObject = {},
      index = -1,
      key;

  while (++index < keys.length) {
    key = keys[index];

    newObject[key] = fn(object[key], key, object);
  }

  return newObject;
}

/**
 * @function map
 *
 * @description
 * map the items based on the returns of the call with fn
 *
 * @param {function(*, (number|string), (Array<*>|Object)): *} fn the method to map with
 * @param {Array<*>|Object} items the array of items to map
 * @returns {Array<*>|Object} the mapped items
 */
export default curry(function map(fn, items) {
  return isObject(items) ? mapObject(fn, items) : mapArray(fn, coalesceToArray(items));
});
