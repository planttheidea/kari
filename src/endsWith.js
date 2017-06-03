// methods
import curry from './curry';

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

  return valueToTest[valueToTest.length - 1] === endingValue;
});
