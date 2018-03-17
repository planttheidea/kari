// methods
import curry from './curry';

// utils
import {assign, normalizeObject} from './_internal/normalize';

/**
 * @function insert
 *
 * @description
 * insert a new item into the collection of items
 *
 * @param {number|string} key the key to assign into
 * @param {Array<*>|*} newItems the new item(s) to add into the collection at index
 * @param {Array<*>} collection the collection to insert into
 * @returns {Array<*>} the collection with the new items inserted
 */
export default curry(function insert(key, newItems, collection) {
  const normalizedCollection = normalizeObject(collection);
  const normalizedNewItems = normalizeObject(newItems);

  return Array.isArray(normalizedCollection)
    ? normalizedCollection
      .slice(0, key)
      .concat(
        Array.isArray(normalizedNewItems) ? normalizedNewItems : [normalizedNewItems],
        normalizedCollection.slice(key)
      )
    : assign({}, collection, {[key]: newItems});
});
