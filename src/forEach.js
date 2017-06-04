// methods
import curry from './curry';

// utils
import forEachArray from './_utils/forEachArray';
import forEachObject from './_utils/forEachObject';
import isArray from './_utils/isArray';
import isObject from './_utils/isObject';

/**
 * @function forEach
 *
 * @description
 * iterate over each of the items
 *
 * @param {function(*, (number|string), (Array<*>|Object)): *} fn the function to iterate over the items
 * @param {Array<*>|Object} items the items to iterate over
 * @returns {Array<*>|Object} the items passed
 */
export default curry((fn, items) => {
  return isObject(items) ? forEachObject(fn, items) : forEachArray(fn, isArray(items) ? items : [items]);
});
