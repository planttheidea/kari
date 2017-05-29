// methods
import curry from './curry';

/**
 * @function every
 *
 * @description
 * does every iteration of items return truthy based on passing to fn
 *
 * @param {function(*, (number|string), (Array<*>|Object)): *} fn the method to test with
 * @param {(Array<*>|Object)} items the array of items to test
 * @returns {boolean} does every iteration match
 */
export default curry(function every(fn, items) {
  const keys = Object.keys(items);

  if (!keys.length) {
    return true;
  }

  let index = -1,
      key;

  while (++index < keys.length) {
    key = keys[index];

    if (!fn(items[key], key, items)) {
      return false;
    }
  }

  return true;
});
