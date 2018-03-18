// methods
import curry from './curry';

/**
 * @function pair
 *
 * @description
 * convert the key and value passed into a pair
 *
 * @param {any} key the key to use
 * @param {any} value the value to use
 * @returns {Array<any>} the key and value as a pair
 */
export default curry(function pair(key, value) {
  return [key, value];
});
