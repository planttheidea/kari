// methods
import curry from './curry';

// utils
import isFunction from './_utils/isFunction';

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
  return (...args) => {
    let index = 0,
        value = fn(args[index]);

    while (++index < arity && isFunction(value)) {
      value = value(args[index]);
    }

    return value;
  };
});
