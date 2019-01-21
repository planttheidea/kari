// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isObject from './_utils/isObject';

/**
 * @function insert
 *
 * @description
 * insert a new item into the collection of items
 *
 * @param {number|string} key the index to assign into
 * @param {Array<*>|*} newItems the new item(s) to add into the collection at index
 * @param {Array<*>} collection the collection to insert into
 * @returns {Array<*>} the collection with the new items inserted
 */
export default curry(function insert(key, newItems, collection) {
  if (isObject(collection)) {
    return {
      ...collection,
      [key]: newItems,
    };
  }

  const array = coalesceToArray(collection);

  return [...array.slice(0, key), ...coalesceToArray(newItems), ...array.slice(key)];
});
