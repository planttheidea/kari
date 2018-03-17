// methods
import curry from './curry';
import filter from './filter';
import notBy from './notBy';

/**
 * @function reject
 *
 * @description
 * filter the collection based on items that when called with fn return false (opposite of filter)
 *
 * @param {function} fn the function to filter the collection by
 * @param {Array<*>|Object} collection the collection to filter
 * @returns {Array<*>|Object} the filtered collection
 */
export default curry(function reject(fn, collection) {
  return filter(notBy(fn), collection);
});
