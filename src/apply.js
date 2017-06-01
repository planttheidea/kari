// methods
import curry from './curry';

/**
 * @function apply
 *
 * @description
 * apply the argument passed as second parameter to the function passed as the first,
 * helpful in currying variadic functions
 *
 * @param {function} fn the function to apply the args to
 * @param {Array<*>} args the arguments to pass to fn
 * @returns {*} the result of fn called with args
 */
export default curry(function apply(fn, args) {
  return fn.apply(this, args);
});
