// methods
import curry from './curry';

// utils
import isEquivalent from './_utils/isEquivalent';

/**
 * @function equals
 *
 * @description
 * does the first value equal the second value in value (not strict equality)
 *
 * @param {*} firstValue the first value to compare
 * @param {*} secondValue the second value to compare
 * @returns {boolean} are the first and second value equivalent
 */
export default curry(function equals(firstValue, secondValue) {
  return isEquivalent(firstValue, secondValue);
});
