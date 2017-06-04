// utils
import isNumber from './isNumber';

/**
 * @function isInteger
 *
 * @description
 * test if the item an integer
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item an integer
 */
export default function isInteger(object) {
  return isNumber(object) && ~~object === object;
}
