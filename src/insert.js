// methods
import curry from './curry';

// utils
import {assign, getNormalizedResult} from './_internal/normalize';

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
  return getNormalizedResult(
    collection,
    (normalized) => normalized.slice(0, key).concat(newItems, normalized.slice(key)),
    (normalized) => assign({}, normalized, {[key]: newItems})
  );
});
