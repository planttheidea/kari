// methods
import curry from './curry';
import insert from './insert';

/**
 * @function prepend
 *
 * @description
 * prepend a new item to the front of the items passed
 *
 * @param {*} newItem the item to add to items
 * @param {Array<*>} items the array of items to prepend to
 * @returns {Array<*>} the updated array of items
 */
export default curry(function prepend(newItem, items) {
  return insert(0, newItem, items);
});
