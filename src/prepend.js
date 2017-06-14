// methods
import curry from './curry';
import insert from './insert';

/**
 * @function prepend
 *
 * @description
 * prepend a new item to the front of the collection passed
 *
 * @param {*} newItem the item to add to collection
 * @param {Array<*>} collection the collection of items to prepend to
 * @returns {Array<*>} the updated collection
 */
export default curry(function prepend(newItem, collection) {
  return insert(0, newItem, collection, true);
});
