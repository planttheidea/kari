// methods
import curry from './curry';

/**
 * @function ascend
 *
 * @description
 * create a comparator function that will ascending sort by the values returned from calling fn
 *
 * @param {function} fn the function to call on the values
 * @param {*} first the first value to call
 * @param {*} second the second value to call
 * @returns {number} the result of comparing the first and second values
 */
export default curry(function ascend(fn, first, second) {
  const firstValue = fn(first);
  const secondValue = fn(second);

  return firstValue > secondValue ? -1 : firstValue < secondValue ? 1 : 0;
});
