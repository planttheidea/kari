// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';

/**
 * @function sortBy
 *
 * @param {function} fn the function to get the value from the iteration item with
 * @param {Array<*>} array the array to sort
 * @returns {Array<*>} the sorted array
 */
export default curry(function sortBy(fn, array) {
  let firstValue, secondValue;

  return [...coalesceToArray(array)].sort(function(first, second) {
    firstValue = fn(first);
    secondValue = fn(second);

    return firstValue < secondValue ? -1 : firstValue > secondValue ? 1 : 0;
  });
});
