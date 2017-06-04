// utils
import isInteger from './isInteger';

/**
 * @function isPositiveInteger
 *
 * @description
 * is the object passed a positive integer
 *
 * @param {number} object the object to test
 * @returns {boolean} is the object passed a positive integer
 */
export default function isPositiveInteger(object) {
  return isInteger(object) && object > 0;
}
