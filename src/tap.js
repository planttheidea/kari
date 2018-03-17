/**
 * @function tap
 *
 * @description
 * execute fn on value before returning value as an identity method would
 *
 * @param {function} fn the function to call value on
 * @returns {function(...Array<*>): *} the method that will handle the tap call with args
 */
export default function tap(fn) {
  return function() {
    fn.apply(this, arguments);

    return arguments[0];
  };
}
