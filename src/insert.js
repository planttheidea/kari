// methods
import curry from './curry';

// utils
import isArray from './_utils/isArray';

/**
 * @function insert
 *
 * @description
 * insert a new item into the array of items
 *
 * @param {number} index the index to assign into
 * @param {Array<*>|*} newItems the new item(s) to add into the array at index
 * @param {Array<*>} items the array to insert into
 * @returns {Array<*>} the items with the new items inserted
 */
export default curry(function insert(index, newItems, items) {
  const itemsToInsert = isArray(newItems) ? newItems : [newItems];

  return [
    ...items.slice(0, index),
    ...itemsToInsert,
    ...items.slice(index)
  ];
});
