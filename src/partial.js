// utils
import {copyArray} from './_internal/normalize';

/**
 * @function partial
 *
 * @param {function} fn the function to make into a partial function
 * @param {...Array<*>} outerArgs arguments to partially assign before fn is executed
 * @returns {function(...Array<*>): *} the partial function that will apply fn
 */
export default function partial() {
  const outerArgs = copyArray(arguments);
  const fn = outerArgs.shift();

  return function() {
    return fn.apply(this, outerArgs.concat(copyArray(arguments)));
  };
}
