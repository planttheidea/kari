// methods
import curry from './curry';

// utils
import forEachArray from './_utils/forEachArray';
import forEachObject from './_utils/forEachObject';
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
  let filteredItems = [];

  forEachArray((item, index) => {
    if (fn(item, index, array)) {
      filteredItems.push(item);
    }
  }, array);

  return filteredItems;
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
  let filteredObject = {};

  forEachObject((item, key) => {
    if (fn(item, key, object)) {
      filteredObject[key] = item;
    }
  }, object);

  return filteredObject;
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
  return isObject(items) ? filterObject(fn, items) : filterArray(fn, isArray(items) ? items : [items]);
});
