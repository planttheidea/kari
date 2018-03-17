// methods
import reduce from './reduce';

// utils
import {assign, normalizeObject} from './_internal/normalize';

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
  return array.concat(Array.isArray(value) ? flattenArray([], value) : [value]);
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
  return assign(object, value && typeof value === 'object' ? flattenObject({}, value) : {[key]: value});
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
  const normalizedCollection = normalizeObject(collection);

  return Array.isArray(normalizedCollection)
    ? flattenArray([], normalizedCollection)
    : flattenObject({}, normalizedCollection);
}
