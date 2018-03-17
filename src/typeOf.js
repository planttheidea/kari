// methods
import curry from './curry';

/**
 * @function typeOf
 *
 * @description
 * create a function checks if the value is typeof type
 *
 * @param {*} value the value to test
 * @returns {boolean} is the value typeof type
 */
export default curry(function typeOf(type, value) {
  return typeof value === type;
});
