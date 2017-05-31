// methods
import curry from './curry';

/**
 * @function sort
 *
 * @param {function} fn the comparator function
 * @param {Array<*>} array the array to sort
 * @returns {Array<*>} the sorted array
 */
export default curry(function sort(fn, array) {
  return [...array].sort(fn);
});
