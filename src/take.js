// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isObject from './_utils/isObject';

/**
 * @function take
 *
 * @description
 * get the first n number of items in a collection
 *
 * @param {number} size the number of items to get from the end of the collection
 * @param {Array<*>} collection the collection of items to get the first n items from
 * @return {Array<*>} the first n number of items
 */
export default curry(function take(size, collection) {
  if (!isObject(collection)) {
    const array = coalesceToArray(collection);

    return size > 0 ? array.slice(0, size) : [];
  }

  const keys = Object.keys(collection);

  let index = -1,
      newObject = {},
      key;

  while (++index < size) {
    key = keys[index];

    newObject[key] = collection[key];
  }

  return newObject;
});
