// methods
import curry from './curry';
import insert from './insert';

/**
 * @function append
 *
 * @description
 * append a new item to the end of the items passed
 *
 * @param {*} newItem the item to add to items
 * @param {Array<*>} items the array of items to append to
 * @returns {Array<*>} the updated array of items
 */
export default curry(function append(newItem, items) {
  return insert(items.length, newItem, items);
});
