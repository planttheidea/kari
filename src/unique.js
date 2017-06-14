// methods
import identity from './identity';
import uniqueBy from './uniqueBy';

/**
 * @function unique
 *
 * @description
 * filter down the collection to the unique values
 *
 * @param {Array<*>|Object} collection the collection to filter
 * @returns {Array<*>|Object} the filtered collection
 */
export default function unique(collection) {
  return uniqueBy(identity, collection);
}
