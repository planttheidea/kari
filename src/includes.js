// methods
import curry from './curry';

/**
 * @function includes
 *
 * @description
 * does the array or string include the value passed based on strict equality
 *
 * @param {*} value is the value passed contained in the object
 * @param {Array<*>|string} object the object to test if it contains the value
 * @returns {boolean} does object contain value
 */
export default curry(function includes(value, object) {
  return !!~object.indexOf(value);
});
