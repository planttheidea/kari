// methods
import curry from './curry';

/**
 * @function find
 *
 * @description
 * find the first item that returns truthy based on the call to fn
 *
 * @param {function(*, number, Array<*>): *} fn the method to test with
 * @param {Array<*>} items the array of items to test
 * @returns {*} the item that matches, or undefined
 */
export default curry(function find(fn, items) {
  const keys = Object.keys(items);

  let index = -1,
      key;

  while (++index < keys.length) {
    key = keys[index];

    if (fn(items[key], key, items)) {
      return items[key];
    }
  }
});
