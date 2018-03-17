// methods
import curry from './curry';

/**
 * @function getCompleteArgs
 *
 * @description
 * get the complete list of arguments based on arity, even if it is larger than the
 * original args list
 *
 * @param {Arguments} args the args passed
 * @param {number} arity the number of arguments to return in the array
 * @returns {Array<*>} the complete list of args
 */
function getCompleteArgs(args, arity) {
  let completeArgs = new Array(arity);

  for (let index = 0; index < arity; index++) {
    completeArgs[index] = args[index];
  }

  return completeArgs;
}

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
    return fn.apply(this, getCompleteArgs(arguments, arity));
  };
});
