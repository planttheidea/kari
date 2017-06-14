// methods
import curry from './curry';
import find from './find';

// utils
import reverse from './_utils/reverse';

/**
 * @function findLast
 *
 * @description
 * find the last item that returns truthy based on the call to fn
 *
 * @param {function(*, number, Array<*>): *} fn the method to test with
 * @param {Array<*>} collection the collection of items to test
 * @returns {*} the item that matches, or undefined
 */
export default curry(function findLast(fn, collection) {
  return find(fn, reverse(collection));
});
