// methods
import compose from './compose';

// utils
import reverseArray from './_utils/reverseArray';

/**
 * @function pipe
 *
 * @param {...Array<function>} fns the array of functions to pipe
 * @returns {function(...Array<*>): *} the piped methods as a single method
 */
export default function pipe(...fns) {
  return compose(...reverseArray(fns));
}
