// methods
import curry from './curry';
import reduce from './reduce';

// utils
import isArray from './_utils/isArray';
import isObject from './_utils/isObject';

/**
 * @function filterArray
 *
 * @description
 * filter down the items to those that return truthy based on the call of fn
 *
 * @param {function(*, (number|string), Array<*>): *} fn the method to filter with
 * @param {Array<*>} array the array of items to filter
 * @returns {Array<*>} the filtered items
 */
function filterArray(fn, array) {
  return reduce((filteredItems, item, index, items) => {
    if (fn(item, index, items)) {
      filteredItems.push(item);
    }

    return filteredItems;
  }, array, []);
}

/**
 * @function filterObject
 *
 * @description
 * filter down the items to those that return truthy based on the call of fn
 *
 * @param {function(*, string, Object): *} fn the method to filter with
 * @param {Object} object the array of items to filter
 * @returns {Object} the filtered items
 */
function filterObject(fn, object) {
  return reduce((filteredItems, item, key, items) => {
    if (fn(item, key, items)) {
      filteredItems[key] = item;
    }

    return filteredItems;
  }, object, {});
}

/**
 * @function filter
 *
 * @description
 * filter down the items to those that return truthy based on the call of fn
 *
 * @param {function(*, (number|string), (Array<*>|Object): *} fn the method to filter with
 * @param {Array<*>|Object} items the array of items to filter
 * @returns {Array<*>|Object} the filtered items
 */
export default curry((fn, items) => {
  if (isArray(items)) {
    return filterArray(fn, items);
  }

  if (isObject(items)) {
    return filterObject(fn, items);
  }

  return fn(items, 0, [items]) ? [items] : [];
});
