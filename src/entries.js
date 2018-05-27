// methods
import pair from './pair';

// utils
import {reduce} from './_internal/reduce';

/**
 * @function entries
 *
 * @description
 * get the pairs of [key, value] for the items in the collection
 *
 * @param {Array<*>|Map|Object|Set} collection the collection to get the entries of
 * @returns {Array<Array<*>>} the entries of the collection
 */
export default function entries(collection) {
  return collection
    ? typeof collection.entries === 'function' && typeof Array.from === 'function'
      ? Array.from(collection.entries())
      : reduce(
        (entries, value, key) => {
          entries.push(pair(key, value));

          return entries;
        },
        [],
        collection
      )
    : [];
}
