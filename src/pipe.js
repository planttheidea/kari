// methods
import compose from './compose';

/**
 * @function pipe
 *
 * @param {...Array<function>} fns the array of functions to pipe
 * @returns {function(...Array<*>): *} the piped methods as a single method
 */
export default function pipe(...fns) {
  fns.reverse();

  return compose.apply(this, fns);
}
