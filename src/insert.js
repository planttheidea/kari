// methods
import curry from './curry';

// utils
import isArray from './_utils/isArray';
import isObject from './_utils/isObject';

/**
 * @function insert
 *
 * @description
 * insert a new item into the array of items
 *
 * @param {number|string} key the index to assign into
 * @param {Array<*>|*} newItems the new item(s) to add into the array at index
 * @param {Array<*>} items the array to insert into
 * @returns {Array<*>} the items with the new items inserted
 */
export default curry(function insert(key, newItems, items) {
  if (isObject(items)) {
    return {
      ...items,
      [key]: newItems
    };
  }

  const itemsToInsert = isArray(newItems) ? newItems : [newItems];
  const array = isArray(items) ? items : [items];

  return [
    ...array.slice(0, key),
    ...itemsToInsert,
    ...array.slice(key)
  ];
});
