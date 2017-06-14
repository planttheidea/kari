// methods
import curry from './curry';

/**
 * @function max
 *
 * @description
 * get the higher of the two numbers passed
 *
 * @param {number} firstNumber the first number passed
 * @param {number} secondNumber the second number passed
 * @param {number} the higher of the two numbers
 */
export default curry(function max(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
});
