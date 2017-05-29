// methods
import curry from './curry';

/**
 * @function take
 *
 * @description
 * get the first n number of items in an array
 *
 * @param {number} size the number of items to get from the end of the array
 * @param {Array<*>} items the array of items to get the first n items from
 * @return {Array<*>} the first n number of items
 */
export default curry(function take(size, items) {
  return items.slice(0, size);
});
