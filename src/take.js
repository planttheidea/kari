// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isObject from './_utils/isObject';

/**
 * @function takeObject
 *
 * @description
 * get the first n number of items in an object
 *
 * @param {number} size the number of items to get from the end of the object
 * @param {Object} object the object of items to get the first n items from
 * @param {Array<string>} keys the keys of the object
 * @return {Object} the first n number of items
 */
function takeObject(size, object, keys) {
  let index = -1,
      newObject = {},
      key;

  while (++index < size) {
    key = keys[index];

    newObject[key] = object[key];
  }

  return newObject;
}

/**
 * @function takeArray
 *
 * @description
 * get the first n number of items in an array
 *
 * @param {number} size the number of items to get from the end of the array
 * @param {Array<*>} array the array of items to get the first n items from
 * @return {Array<*>} the first n number of items
 */
function takeArray(size, array) {
  return size > 0 ? array.slice(0, size) : [];
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
  return isObject(collection) ?
    takeObject(size, collection, Object.keys(collection)) :
    takeArray(size, coalesceToArray(collection));
});
