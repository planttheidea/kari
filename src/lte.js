// methods
import curry from './curry';

/**
 * @function lte
 *
 * @description
 * determine if the first value is less than or equal to the second
 *
 * @param {number|string} firstValue the first value to compare
 * @param {number|string} secondValue the second value to compare
 * @param {boolean} is the firstValue less than or equal to the secondValue
 */
export default curry(function lte(firstValue, secondValue) {
  return firstValue <= secondValue;
});
