// methods
import curry from './curry';

// utils
import {copyArray} from './_internal/normalize';

/**
 * @function arity
 *
 * @description
 * create a function that will pass the arity of args requested to fn
 *
 * @param {number} arity the intended arity of fn
 * @param {function} fn the fn to define the arity of
 * @returns {function(...Array<*>): *} the function that will apply the arity of args requested to fn
 */
export default curry(function arity(arity, fn) {
  return function() {
    return fn.apply(this, copyArray(arguments, arity));
  };
});
