// utils
import isNull from './isNull';
import isUndefined from './isUndefined';

/**
 * @function getObjectClass
 *
 * @description
 * get the object's class type
 *
 * @param {*} object the object to get the class of
 * @returns {string} the object's class
 */
export default function getObjectClass(object) {
  if (isNull(object)) {
    return 'Null';
  }

  if (isUndefined(object)) {
    return 'Undefined';
  }

  return Object.prototype.toString.call(object).slice(8, -1);
}
