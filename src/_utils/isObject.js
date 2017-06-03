/**
 * @function isObject
 *
 * @description
 * test if the item a object
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item a object
 */
export default function isObject(object) {
  return typeof object === 'object' && !!object && object.constructor === Object;
}
