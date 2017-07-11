// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isObject from './_utils/isObject';

/**
 * @function restObject
 *
 * @description
 * get the last n number of items in an object
 *
 * @param {number} size the number of items to get from the end of the object
 * @param {Object} object the object of items to get the last n items from
 * @param {Array<string>} keys the object's keys
 * @return {Object} the last n number of items in the object
 */
function restObject(size, object, keys) {
  let index = keys.length - size - 1,
      newObject = {},
      key;

  while (++index < keys.length) {
    key = keys[index];

    newObject[key] = object[key];
  }

  return newObject;
}

/**
 * @function restArray
 *
 * @description
 * get the last n number of items in a array
 *
 * @param {number} size the number of items to get from the end of the array
 * @param {Array<*>} array the array of items to get the last n items from
 * @return {Array<*>} the last n number of items in the array
 */
function restArray(size, array) {
  return size > 0 ? array.slice(array.length - size) : [];
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
  return isObject(collection) ?
    restObject(size, collection, Object.keys(collection)) :
    restArray(size, coalesceToArray(collection));
});
