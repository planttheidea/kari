// methods
import curry from './curry';

/**
 * @function tap
 *
 * @description
 * execute fn on value before returning value as an identity method would
 *
 * @param {function} fn the function to call value on
 * @param {*} the value to call fn with
 * @param {*} the value passed
 */
export default curry(function tap(fn, value) {
  fn(value);

  return value;
});
