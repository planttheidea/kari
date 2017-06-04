// methods
import curry from './curry';

/**
 * @function gt
 *
 * @description
 * determine if the first value is greater than the second
 *
 * @param {number|string} firstValue the first value to compare
 * @param {number|string} secondValue the second value to compare
 * @param {boolean} is the firstValue greater than the secondValue
 */
export default curry(function gt(firstValue, secondValue) {
  return firstValue > secondValue;
});
