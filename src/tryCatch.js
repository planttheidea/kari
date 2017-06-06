// methods
import curry from './curry';

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
  return function(...args) {
    try {
      return tryFn(...args);
    } catch (error) {
      return catchFn(error, ...args);
    }
  };
});
