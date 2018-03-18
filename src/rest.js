// methods
import curry from './curry';

// utils
import {getNormalizedResult} from './_internal/normalize';

/**
 * @function restObject
 *
 * @description
 * get the last n number of items in an object
 *
 * @param {number} size the number of items to get from the end of the object
 * @param {Object} object the object of items to get the last n items from
 * @return {Object} the last n number of items in the object
 */
function restObject(size, object) {
  const keys = Object.keys(object);

  let index = keys.length - size,
      newObject = {},
      key;

  for (; index < keys.length; index++) {
    key = keys[index];

    newObject[key] = object[key];
  }

  return newObject;
}

/**
 * @function rest
 *
 * @description
 * get the last n number of items in a collection
 *
 * @param {number} size the number of items to get from the end of the collection
 * @param {Array<*>|Object} collection the collection of items to get the last n items from
 * @return {Array<*>|Object} the last n number of items in the collection
 */
export default curry(function rest(size, collection) {
  return getNormalizedResult(
    collection,
    (normalized) => (size > 0 ? normalized.slice(normalized.length - size) : []),
    (normalized) => restObject(size, normalized)
  );
});
