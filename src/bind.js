// methods
import curry from './curry';

/**
 * @function bind
 *
 * @description
 * bind the object passed to the fn as the "this" object, with optional binding of args
 *
 * @param {function} fn the function to bind
 * @param {*} object the object to bind to fn as the "this"
 * @returns {function} the bound function
 */
export default curry(function bind(fn, object) {
  return fn.bind(object);
});
