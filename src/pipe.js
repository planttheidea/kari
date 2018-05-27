// methods
import compose from './compose';

// utils
import {copyArray} from './_internal/normalize';

/**
 * @function pipe
 *
 * @param {...Array<function>} fns the array of functions to pipe
 * @returns {function(...Array<*>): *} the piped methods as a single method
 */
export default function pipe() {
  const fns = copyArray(arguments);

  fns.reverse();

  return compose.apply(this, fns);
}
