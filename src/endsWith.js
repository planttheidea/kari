// methods
import curry from './curry';

// utils
import {isEqual, isValidLength} from './_internal/is';

/**
 * @function endsWithString
 *
 * @param {string} value the value that the collection should end with
 * @param {string} item the value to test for ending with endingValue
 * @returns {boolean} does valueToTest end with endingValue
 */
function endsWithString(value, item) {
  const lastIndexOfValue = item.lastIndexOf(value);

  return !!~lastIndexOfValue && lastIndexOfValue === item.length - value.length;
}

/**
 * @function endsWith
 *
 * @param {*} value the value that the collection should end with
 * @param {Array<*>|string} item the value to test for ending with endingValue
 * @returns {boolean} does item end with value
 */
export default curry(function endsWith(value, item) {
  return item && isValidLength(item.length)
    ? typeof item === 'string' ? endsWithString(value, item) : isEqual(item[item.length - 1], value)
    : false;
});
