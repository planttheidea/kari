// methods
import curry from './curry';

/**
 * @function has
 *
 * @description
 * does the value contain the keyOrIndex passed
 *
 * @param {number|string} keyOrIndex the key or index that the value may contain
 * @param {*} value the value to test if key is present in
 * @returns {boolean} does value have keyOrIndex
 */
export default curry(function has(keyOrIndex, value) {
  return value != null && value.hasOwnProperty(keyOrIndex); // eslint-disable-line eqeqeq
});
