// methods
import curry from './curry';

// utils
import {copyArray} from './_internal/normalize';

/**
 * @function tryCatch
 *
 * @description
 * create a method that handles both successful and failed attempts on the arguments passed
 *
 * @param {function} tryFn the method to try to execute
 * @param {function} catchFn the method that will execute if tryFn fails
 * @returns {function(...Array<*>): *} the method that will handle the try / catch
 */
export default curry(function tryCatch(tryFn, catchFn) {
  return function() {
    try {
      return tryFn.apply(this, arguments);
    } catch (error) {
      return catchFn.apply(this, [error].concat(copyArray(arguments)));
    }
  };
});
