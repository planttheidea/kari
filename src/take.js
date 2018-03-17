// methods
import curry from './curry';

// utils
import {normalizeObject} from './_internal/normalize';

/**
 * @function takeObject
 *
 * @description
 * get the first n number of items in an object
 *
 * @param {number} size the number of items to get from the end of the object
 * @param {Object} object the object of items to get the first n items from
 * @return {Object} the first n number of items
 */
function takeObject(size, object) {
  const keys = Object.keys(object);

  let newObject = {},
      key;

  for (let index = 0; index < size; index++) {
    key = keys[index];

    newObject[key] = object[key];
  }

  return newObject;
}

/**
 * @function take
 *
 * @description
 * get the first n number of items in a collection
 *
 * @param {number} size the number of items to get from the end of the collection
 * @param {Array<*>|Object} collection the collection of items to get the first n items from
 * @return {Array<*>|Object} the first n number of items
 */
export default curry(function take(size, collection) {
  const normalizedCollection = normalizeObject(collection);

  return Array.isArray(normalizedCollection)
    ? size > 0 ? normalizedCollection.slice(0, size) : []
    : takeObject(size, normalizedCollection);
});
