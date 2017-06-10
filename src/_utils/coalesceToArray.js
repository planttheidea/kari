// utils
import isArray from './isArray';

/**
 * @function coalesceToArray
 *
 * @description
 * coalesce the value passed to an array if it is not already one
 *
 * @param {*} value the value to possibly coalesce
 * @returns {Array<*>} the coalesced array
 */
export default function coalesceToArray(value) {
  return isArray(value) ? value : [value];
}
