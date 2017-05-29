// methods
import curry from './curry';

// utils
import {
  isArray,
  isObject
} from './_utils/is';

/**
 * @function forEachArray
 *
 * @description
 * iterate over each of the items
 *
 * @param {function(*, (number), (Array<*>)): *} fn the function to iterate over the items
 * @param {Array<*>} array the items to iterate over
 * @returns {Array<*>} the items passed
 */
function forEachArray(fn, array) {
  let index = -1;

  while (++index < array.length) {
    fn(array[index], index, array);
  }

  return array;
}

/**
 * @function forEachObject
 *
 * @description
 * iterate over each of the items
 *
 * @param {function(*, (string), (Object)): *} fn the function to iterate over the items
 * @param {Object} object the items to iterate over
 * @returns {Object} the items passed
 */
function forEachObject(fn, object) {
  const keys = Object.keys(object);

  let index = -1,
      key;

  while (++index < keys.length) {
    key = keys[index];

    fn(object[key], key, object);
  }

  return object;
}

/**
 * @function forEach
 *
 * @description
 * iterate over each of the items
 *
 * @param {function(*, (number|string), (Array<*>|Object)): *} fn the function to iterate over the items
 * @param {Array<*>|Object} items the items to iterate over
 * @returns {Array<*>|Object} the items passed
 */
export default curry((fn, items) => {
  if (isArray(items)) {
    return forEachArray(fn, items);
  }

  if (isObject(items)) {
    return forEachObject(fn, items);
  }

  return items;
});
