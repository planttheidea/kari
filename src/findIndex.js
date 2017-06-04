// methods
import curry from './curry';

// utils
import getKey from './_utils/getKey';

/**
 * @function findIndex
 *
 * @description
 * find the index of the first item that returns truthy based on the call to fn
 *
 * @param {function(*, number, Array<*>): *} fn the method to test with
 * @param {Array<*>} items the array of items to test
 * @returns {number} the index of the item that matches, or -1
 */
export default curry(function findIndex(fn, items) {
  const keys = Object.keys(items);

  let index = -1,
      key;

  while (++index < keys.length) {
    key = keys[index];

    if (fn(items[key], key, items)) {
      return getKey(key);
    }
  }

  return -1;
});
