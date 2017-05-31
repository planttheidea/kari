// methods
import curry from './curry';

/**
 * @function subtract
 *
 * @description
 * subtract two values
 *
 * @param {number} first the number to subtract
 * @param {number} second the number to subtract from first
 * @returns {number} the division of second from first
 */
export default curry(function subtract(first, second) {
  return first - second;
});
