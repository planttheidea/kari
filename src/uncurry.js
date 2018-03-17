// methods
import curry from './curry';

/**
 * @function subtract
 *
 * @description
 * subtract two values
 *
 * @param {number} first the number to subtract
 * @param {number} second the number to subtract from first
 * @returns {number} the division of second from first
 */
export default curry(function uncurry(arity, fn) {
  return function(...args) {
    let index = 0,
        value = fn(args[index]);

    while (typeof value === 'function' && ++index < arity) {
      value = value(args[index]);
    }

    return value;
  };
});
