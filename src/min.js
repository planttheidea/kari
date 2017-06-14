// methods
import curry from './curry';

/**
 * @function min
 *
 * @description
 * get the lower of the two numbers passed
 *
 * @param {number} firstNumber the first number passed
 * @param {number} secondNumber the second number passed
 * @param {number} the lower of the two numbers
 */
export default curry(function min(firstNumber, secondNumber) {
  return Math.min(firstNumber, secondNumber);
});
