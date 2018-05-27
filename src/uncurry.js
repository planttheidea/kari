// methods
import curry from './curry';

// utils
import {copyArray} from './_internal/normalize';

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
  return function() {
    const args = copyArray(arguments);

    let index = 0,
        value = fn(args[index]);

    while (typeof value === 'function' && ++index < arity) {
      value = value(args[index]);
    }

    return value;
  };
});
