// utils
import {isPrimitive} from './_internal/is';

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
  if (Array.isArray(value)) {
    return [];
  }

  if (typeof value === 'string') {
    return '';
  }

  if (value && !isPrimitive(value) && !(value instanceof RegExp || value instanceof Date)) {
    return new value.constructor();
  }
}
