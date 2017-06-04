/**
 * @function isFunction
 *
 * @description
 * test if the item a function
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item a function
 */
export default function isFunction(object) {
  return typeof object === 'function';
}
