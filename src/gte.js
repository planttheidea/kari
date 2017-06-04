// methods
import curry from './curry';

/**
 * @function gte
 *
 * @description
 * determine if the first value is greater than or equal to the second
 *
 * @param {number|string} firstValue the first value to compare
 * @param {number|string} secondValue the second value to compare
 * @param {boolean} is the firstValue greater than or equal to the secondValue
 */
export default curry(function gte(firstValue, secondValue) {
  return firstValue >= secondValue;
});
