// utils
import {reduce} from './_internal/reduce';

/**
 * @function getEntriesFromIterable
 *
 * @description
 * get the pairs of [key, value] for the items in the iterable collection
 *
 * @param {Map|Set} collection the collection to get the entries of
 * @returns {Array<Array<*>>} the entries of the collection
 */
export function getEntriesFromIterable(collection) {
  if (typeof Array.from === 'function') {
    return Array.from(collection.entries());
  }

  let entries = [];

  collection.forEach((value, key) => {
    entries.push([key, value]);
  });

  return entries;
}

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
    ? typeof collection.entries === 'function'
      ? getEntriesFromIterable(collection)
      : reduce(
        (entries, value, key) => {
          entries.push([key, value]);

          return entries;
        },
        [],
        collection
      )
    : [];
}
