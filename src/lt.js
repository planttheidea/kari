// methods
import curry from './curry';

/**
 * @function lt
 *
 * @description
 * determine if the first value is less than the second
 *
 * @param {number|string} firstValue the first value to compare
 * @param {number|string} secondValue the second value to compare
 * @param {boolean} is the firstValue less than the secondValue
 */
export default curry(function lt(firstValue, secondValue) {
  return firstValue < secondValue;
});
