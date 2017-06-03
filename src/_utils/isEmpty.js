// utils
import isArray from './isArray';
import isString from './isString';

/**
 * @function isEmpty
 *
 * @description
 * is the object empty based on:
 * - is it truthy
 * - if an array, does it have length
 * - if an object, does it have keys
 * - is it anything else
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item empty
 */
export default function isEmpty(object) {
  if (!object) {
    return true;
  }

  if (isArray(object) && !object.length) {
    return true;
  }

  return !isString(object) && !Object.keys(object).length;
}
