// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isObject from './_utils/isObject';

/**
 * @function rest
 *
 * @description
 * get the last n number of items in a collection
 *
 * @param {number} size the number of items to get from the end of the collection
 * @param {Array<*>} collection the collection of items to get the last n items from
 * @return {Array<*>} the last n number of items in the collection
 */
export default curry(function rest(size, collection) {
  if (!isObject(collection)) {
    const array = coalesceToArray(collection);

    return size > 0 ? array.slice(array.length - size) : [];
  }

  if (size <= 0) {
    return {};
  }

  const keys = Object.keys(collection);

  let index = -1,
      newObject = {},
      key;

  while (++index < size) {
    key = keys[keys.length - index];

    newObject[key] = collection[key];
  }

  return newObject;
});
