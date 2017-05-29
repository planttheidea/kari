// methods
import curry from './curry';

/**
 * @function rest
 *
 * @description
 * get the last n number of items in an array
 *
 * @param {number} size the number of items to get from the end of the array
 * @param {Array<*>} items the array of items to get the last n items from
 * @return {Array<*>} the last n number of items
 */
export default curry(function rest(size, items) {
  return items.slice(items.length - size);
});
