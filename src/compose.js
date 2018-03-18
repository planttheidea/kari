// methods
import identity from './identity';

// utils
import {reduceArray} from './_internal/reduce';

/**
 * @function compose
 *
 * @param {...Array<function>} fns the array of functions to compose
 * @returns {function(...Array<*>): *} the composed methods as a single method
 */
export default function compose(...fns) {
  return reduceArray(
    function(f, g) {
      return function() {
        return f(g.apply(this, arguments));
      };
    },
    identity,
    fns
  );
}
