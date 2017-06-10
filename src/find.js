// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import findInArray from './_utils/findInArray';
import findInObject from './_utils/findInObject';
import isObject from './_utils/isObject';

/**
 * @function find
 *
 * @description
 * find the first item that returns truthy based on the call to fn
 *
 * @param {function(*, number, Array<*>): *} fn the method to test with
 * @param {Array<*>} items the array of items to test
 * @returns {*} the item that matches, or undefined
 */
export default curry(function find(fn, items) {
  return isObject(items) ? findInObject(fn, items, Object.keys(items), false) :
    findInArray(fn, coalesceToArray(items), false);
});
