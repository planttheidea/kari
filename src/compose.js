/**
 * @function compose
 *
 * @param {...Array<function>} fns the array of functions to compose
 * @returns {function(...Array<*>): *} the composed methods as a single method
 */
export default function compose(...fns) {
  return fns.reduce((f, g) => {
    return (...args) => {
      return f(g(...args));
    };
  });
}
