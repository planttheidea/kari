// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import findInArray from './_utils/findInArray';
import findInObject from './_utils/findInObject';
import isObject from './_utils/isObject';

/**
 * @function findIndex
 *
 * @description
 * find the index of the first item that returns truthy based on the call to fn
 *
 * @param {function(*, number, Array<*>): *} fn the method to test with
 * @param {Array<*>} items the array of items to test
 * @returns {number} the index of the item that matches, or -1
 */
export default curry(function findIndex(fn, items) {
  return isObject(items) ? findInObject(fn, items, Object.keys(items), true) :
    findInArray(fn, coalesceToArray(items), true);
});
