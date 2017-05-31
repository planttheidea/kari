// methods
import curry from './curry';

/**
 * @function divide
 *
 * @description
 * divide two values
 *
 * @param {number} first the number to divide
 * @param {number} second the number to divide from the first
 * @returns {number} the division of second from first
 */
export default curry(function divide(first, second) {
  return first / second;
});
