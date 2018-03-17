// methods
import curry from './curry';

// utils
import {isValidLength} from './_internal/is';

/**
 * @function startsWith
 *
 * @param {*} value the value that the collection should start with
 * @param {Array<*>|string} item the value to test for starting with startingValue
 * @returns {boolean} does valueToTest starts with startingValue
 */
export default curry(function startsWith(value, item) {
  return !!item && isValidLength(item.length) && typeof item.indexOf === 'function' && item.indexOf(value) === 0;
});
