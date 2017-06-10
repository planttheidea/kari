// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isObject from './_utils/isObject';
import reduceArray from './_utils/reduceArray';
import reduceObject from './_utils/reduceObject';

/**
 * @function reduce
 *
 * @description
 * reduce the items to a single value based on fn
 *
 * @param {function(*, *, (number|string), (Array<*>|Object)): *} the method to reduce the items with
 * @param {Array<*>|Object} items the items to reduce
 * @param {*} initialValue the initial value to start the reduction from
 * @returns {*} the reduced value
 */
export default curry(function reduce(fn, initialValue, items) {
  return isObject(items) ? reduceObject(fn, items, initialValue, Object.keys(items)) :
    reduceArray(fn, coalesceToArray(items), initialValue);
});
