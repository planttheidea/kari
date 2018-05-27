// external dependencies
import {curry} from 'curriable';
import {sameValueZeroEqual} from 'fast-equals';

/**
 * @constant {Object} PRIMITIVE_TYPES primitive results of typeof
 */
export const PRIMITIVES_TYPES = ['boolean', 'number', 'string', 'symbol', 'undefined'].reduce((map, primitive) => {
  map[primitive] = true;

  return map;
}, {});

/**
 * @function isNaN
 *
 * @description
 * is the value passed a NaN
 *
 * @param {any} value the value to test
 * @returns {boolean} is the value a NaN
 */
export const isNaN = (value) => value !== value;

/**
 * @function isInteger
 *
 * @description
 * is the value passed an integer
 *
 * @param {any} value the value to test
 * @returns {boolean} is the value an integer
 */
export const isInteger = (value) => typeof value === 'number' && ~~value === value;

/**
 * @function isPrimitive
 *
 * @description
 * is the value passed a primitive value
 *
 * @param {any} value the value to test
 * @returns {boolean} is the value a primitive value
 */
export const isPrimitive = (value) => value === null || !!PRIMITIVES_TYPES[typeof value];

/**
 * @function isComplexObject
 *
 * @description
 * is the value passed a complex object
 *
 * @param {any} value the value to test
 * @returns {boolean} is the value a complex object
 */
export const isComplexObject = (value) => !isPrimitive(value) && !(value instanceof RegExp || value instanceof Date);

/**
 * @function isValidLength
 *
 * @description
 * is the value passed a valid length property value
 *
 * @param {any} value the value to test
 * @returns {boolean} is the value a valid length property value
 */
export const isValidLength = (value) => isInteger(value) && value >= 0;

/**
 * @function isArrayLike
 *
 * @description
 * does the value passed have the characteristics of an array
 *
 * @param {any} value the value to test
 * @returns {boolean} does the value have the characteristics of an array
 */
export const isArrayLike = (value) => !!value && typeof value !== 'function' && isValidLength(value.length);

/**
 * @function isEqual
 *
 * @description
 * are the two values passed equal based on SameValueZero
 *
 * @param {any} value1 the first value to test
 * @param {any} value2 the second value to test
 * @returns {boolean} are the two values equal
 */
export const isEqual = curry(sameValueZeroEqual);
