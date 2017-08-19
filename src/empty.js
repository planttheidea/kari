// utils
import is from './is';

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
  if (is(String, value)) {
    return '';
  }

  if (
    is(Array, value) ||
    is(Object, value) ||
    (typeof Map === 'function' && is(Map, value)) ||
    (typeof Set === 'function' && is(Set, value))
  ) {
    return new value.constructor();
  }
}
