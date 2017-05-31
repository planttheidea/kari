// methods
import curry from './curry';

/**
 * @function remainder
 *
 * @description
 * divides the first value from the second and returns the remainder
 *
 * @param {number} numerator the number to divide
 * @param {number} denominator the number to divide from the first
 * @returns {number} the remainder of the division
 */
export default curry(function remainder(numerator, denominator) {
  const mod = numerator % denominator;

  return numerator > 0 ? ~~mod : Math.ceil(mod);
});
