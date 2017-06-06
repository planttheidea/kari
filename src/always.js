// methods
import curry from './curry';

/**
 * @function always
 *
 * @description
 * create a function that always returns value passed
 *
 * @param {*} value the value to always return
 * @returns {function(): *} the method that will always return value
 */
export default curry(function always(value) {
  return function() {
    return value;
  };
});
