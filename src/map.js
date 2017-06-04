// methods
import curry from './curry';
import reduce from './reduce';

// utils
import isArray from './_utils/isArray';
import isObject from './_utils/isObject';

/**
 * @function map
 *
 * @description
 * map the items to those the returns of the call with fn
 *
 * @param {function(*, number, Array<*>): *} fn the method to map with
 * @param {Array<*>} array the array of items to map
 * @returns {Array<*>} the mapped items
 */
function mapArray(fn, array) {
  return reduce((mappedItems, item, index, items) => {
    mappedItems.push(fn(item, index, items));

    return mappedItems;
  }, array, []);
}

/**
 * @function map
 *
 * @description
 * map the items to those the returns of the call with fn
 *
 * @param {function(*, string, Object): *} fn the method to map with
 * @param {Object} object the array of items to map
 * @returns {Object} the mapped items
 */
function mapObject(fn, object) {
  return reduce((mappedItems, item, key, items) => {
    mappedItems[key] = fn(item, key, items);

    return mappedItems;
  }, object, {});
}

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
export default curry((fn, items) => {
  if (isArray(items)) {
    return mapArray(fn, items);
  }

  if (isObject(items)) {
    return mapObject(fn, items);
  }

  return mapArray(fn, [items]);
});
