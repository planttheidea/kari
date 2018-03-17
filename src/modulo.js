// methods
import curry from './curry';

// utils
import {isInteger} from './_internal/is';

/**
 * @function remainder
 *
 * @description
 * get the mathematical modulo of the numerator and modulus
 *
 * @param {number} numerator the number to divide
 * @param {number} modulus the number to divide from the first
 * @returns {number} the remainder of the division
 */
export default curry(function modulo(numerator, modulus) {
  if (!isInteger(numerator) || !isInteger(modulus) || modulus < 1) {
    return NaN;
  }

  const remainder = numerator % modulus;

  return ~~(remainder >= 0 ? remainder : remainder + modulus);
});
