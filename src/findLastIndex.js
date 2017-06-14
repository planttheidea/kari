// methods
import curry from './curry';
import findIndex from './findIndex';

// utils
import reverse from './_utils/reverse';

/**
 * @function findLastIndex
 *
 * @description
 * find the last index of the first item that returns truthy based on the call to fn
 *
 * @param {function(*, number, Array<*>): *} fn the method to test with
 * @param {Array<*>} collection the collection of items to test
 * @returns {number} the last index of the item that matches, or -1
 */
export default curry(function findLastIndex(fn, collection) {
  return findIndex(fn, reverse(collection));
});
