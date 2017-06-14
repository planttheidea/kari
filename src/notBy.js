// methods
import curry from './curry';
import not from './not';

/**
 * @function notBy
 *
 * @description
 * based on calling fn with value, returns the opposite of the return values truthiness
 *
 * @param {function} fn the function to transform value with
 * @param {*} value the value to call fn with
 * @returns {boolean} the opposite of the truthiness of the return from fn(value)
 */
export default curry(function notBy(fn, value) {
  return not(fn(value));
});
