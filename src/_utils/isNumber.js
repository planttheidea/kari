// utils
import isNAN from './isNAN';

/**
 * @function isNumber
 *
 * @description
 * test if the item a number
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item a number
 */
export default function isNumber(object) {
  return typeof object === 'number' && !isNAN(object);
}
