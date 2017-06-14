// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';

/**
 * @function sort
 *
 * @param {function} fn the comparator function
 * @param {Array<*>} array the array to sort
 * @returns {Array<*>} the sorted array
 */
export default curry(function sort(fn, array) {
  return [...coalesceToArray(array)].sort(fn);
});
