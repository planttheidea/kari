// methods
import reduce from './reduce';

// utils
import isFunction from './_utils/isFunction';

/**
 * @function getEntriesFromIterable
 *
 * @description
 * get the pairs of [key, value] for the items in the iterable collection
 *
 * @param {Map|Set} collection the collection to get the entries of
 * @returns {Array<Array<*>>} the entries of the collection
 */
function getEntriesFromIterable(collection) {
  if (isFunction(Array.from)) {
    return Array.from(collection.entries());
  }

  let entries = [];

  collection.forEach((value, key) => {
    entries.push([
      key,
      value
    ]);
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
  if (!collection) {
    return [];
  }

  return isFunction(collection.entries) ? getEntriesFromIterable(collection) : reduce((entries, value, key) => {
    return [
      ...entries,
      [key, value]
    ];
  }, [], collection);
}
