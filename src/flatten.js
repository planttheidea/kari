// methods
import reduce from './reduce';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isArray from './_utils/isArray';
import isObject from './_utils/isObject';

/**
 * @function flattenArray
 *
 * @description
 * recursively flatten the array values into a single flat array
 *
 * @param {Array<*>} newArray the array to flatten into
 * @param {Array<*>} array the array to flatten
 * @returns {Array<*>} the flattened array
 */
const flattenArray = reduce((array, value) => {
  return !isArray(value) ? [...array, value] : [...array, ...flattenArray([], value)];
});

/**
 * @function flattenObject
 *
 * @description
 * recursively flatten the object values into a single flat object
 *
 * @param {Object} newObject the object to flatten into
 * @param {Object} object the object to flatten
 * @returns {Object} the flattened object
 */
const flattenObject = reduce((object, value, key) => {
  return !isObject(value)
    ? {...object, [key]: value}
    : {
      ...object,
      ...flattenObject({}, value)
    };
});

/**
 * @function flatten
 *
 * @description
 * recursively flatten the collection into a single alike collection
 *
 * @param {Array<*>|Object} collection the collection to flatten
 * @returns {Array<*>|Object} the flattened collection
 */
export default function flatten(collection) {
  return isObject(collection) ? flattenObject({}, collection) : flattenArray([], coalesceToArray(collection));
}
