// methods
import curry from './curry';

/**
 * @function add
 *
 * @description
 * add two values together
 *
 * @param {number} first the first number to add
 * @param {number} second the second number to add
 * @returns {number} the sum of first and second
 */
export default curry(function add(first, second) {
  return first + second;
});
