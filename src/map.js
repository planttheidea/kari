// methods
import curry from './curry';
import forEach from './forEach';

// utils
import isArray from './_utils/isArray';
import isObject from './_utils/isObject';

/**
 * @function map
 *
 * @description
 * map the items to those the returns of the call with fn
 *
 * @param {function(*, (number|string), (Array<*>|Object)): *} fn the method to map with
 * @param {Array<*>|Object} items the array of items to map
 * @returns {Array<*>|Object} the mapped items
 */
export default curry(function map(fn, items) {
  const isItemsObject = isObject(items);
  const itemsToMap = isArray(items) || isItemsObject ? items : [items];

  let mappedItems = isItemsObject ? {} : [];

  forEach(function(item, key) {
    mappedItems[key] = fn(item, key, items);
  }, itemsToMap);

  return mappedItems;
});
