// methods
import curry from './curry';

/**
 * @function multiply
 *
 * @description
 * multiply two values together
 *
 * @param {number} first the first number to multiply
 * @param {number} second the second number to multiply
 * @returns {number} the multiplication of first and second
 */
export default curry(function multiply(first, second) {
  return first * second;
});
