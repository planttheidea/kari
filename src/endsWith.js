// methods
import curry from './curry';

// utils
import isString from './_utils/isString';

/**
 * @function endsWithString
 *
 * @param {string} endingValue the value that the collection should end with
 * @param {string} valueToTest the value to test for ending with endingValue
 * @returns {boolean} does valueToTest end with endingValue
 */
function endsWithString(endingValue, valueToTest) {
  const position = valueToTest.length - endingValue.length;
  const lastIndexOfValue = valueToTest.lastIndexOf(endingValue);

  return !!~lastIndexOfValue && lastIndexOfValue === position;
}

/**
 * @function endsWith
 *
 * @param {*} endingValue the value that the collection should end with
 * @param {Array<*>|string} valueToTest the value to test for ending with endingValue
 * @returns {boolean} does valueToTest end with endingValue
 */
export default curry(function endsWith(endingValue, valueToTest) {
  if (!valueToTest.length) {
    return false;
  }

  return isString(valueToTest)
    ? endsWithString(endingValue, valueToTest)
    : valueToTest[valueToTest.length - 1] === endingValue;
});
