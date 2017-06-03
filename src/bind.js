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
 * @param {Array<*>} [args=[]] arguments to partially bind to fn as parameters
 * @returns {function} the bound function
 */
export default curry(function bind(fn, object, args = []) {
  return fn.bind(object, ...args);
});
