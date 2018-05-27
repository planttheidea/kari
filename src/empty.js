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
  return Array.isArray(value)
    ? []
    : value && !isPrimitive(value) && !(value instanceof RegExp || value instanceof Date)
      ? new value.constructor()
      : typeof value === 'string'
        ? ''
        : void 0;
}
