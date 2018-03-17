/**
 * @function partial
 *
 * @param {function} fn the function to make into a partial function
 * @param {...Array<*>} outerArgs arguments to partially assign before fn is executed
 * @returns {function(...Array<*>): *} the partial function that will apply fn
 */
export default function partial(fn, ...outerArgs) {
  return function() {
    return fn.apply(this, Array.prototype.slice.call(arguments, 0).concat(outerArgs));
  };
}
