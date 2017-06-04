// methods
import curry from './curry';

/**
 * @function startsWith
 *
 * @param {*} startingValue the value that the collection should start with
 * @param {Array<*>|string} valueToTest the value to test for starting with startingValue
 * @returns {boolean} does valueToTest starts with startingValue
 */
export default curry(function startsWith(startingValue, valueToTest) {
  if (!valueToTest.length) {
    return false;
  }

  return valueToTest[0] === startingValue;
});
