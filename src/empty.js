// utils
import isArray from './_utils/isArray';
import isObject from './_utils/isObject';
import isString from './_utils/isString';

/**
 * @function empty
 *
 * @description
 * return the empty version of the value passed
 *
 * @param {*} value the value to return an empty version of
 * @returns {*} the empty version of value
 */
export default function empty(value) {
  if (isArray(value)) {
    return [];
  }

  if (isObject(value)) {
    return {};
  }

  if (isString(value)) {
    return '';
  }
}
