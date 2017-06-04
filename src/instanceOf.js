// methods
import curry from './curry';

/**
 * @function instanceOf
 *
 * @description
 * check if the object is an instance of the Constructor
 *
 * @param {function} Constructor the constructor function to test against
 * @param {*} object the object to test
 * @param {boolean} is the object an instance of Constructor
 */
export default curry(function instanceOf(Constructor, object) {
  return !!object && object instanceof Constructor;
});
