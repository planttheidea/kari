/**
 * @function isArray
 *
 * @description
 * test if the item an array
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item an array
 */
export const isArray = Array.isArray;

/**
 * @function isNumber
 *
 * @description
 * test if the item a number
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item a number
 */
export const isNumber = (object) => {
  return typeof object === 'number';
};

/**
 * @function isInteger
 *
 * @description
 * test if the item an integer
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item an integer
 */
export const isInteger = (object) => {
  return isNumber(object) && ~~object === object;
};

/**
 * @function isPositiveInteger
 *
 * @description
 * is the object passed a positive integer
 *
 * @param {number} object the object to test
 * @returns {boolean} is the object passed a positive integer
 */
export const isPositiveInteger = (object) => {
  return isInteger(object) && object > 0;
};

/**
 * @function isObject
 *
 * @description
 * test if the item a object
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item a object
 */
export const isObject = (object) => {
  return typeof object === 'object' && !!object && object.constructor === Object;
};

/**
 * @function isString
 *
 * @description
 * test if the item a string
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item a string
 */
export const isString = (object) => {
  return typeof object === 'string';
};

/**
 * @function isEmpty
 *
 * @description
 * is the object empty based on:
 * - is it truthy
 * - if an array, does it have length
 * - if an object, does it have keys
 * - is it anything else
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item empty
 */
export const isEmpty = (object) => {
  if (!object) {
    return true;
  }

  if (isArray(object) && !object.length) {
    return true;
  }

  return !isString(object) && !Object.keys(object).length;
};
