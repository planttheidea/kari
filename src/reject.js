// methods
import compose from './compose';
import curry from './curry';
import filter from './filter';
import not from './not';

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
  return filter(compose(not, fn), collection);
});
