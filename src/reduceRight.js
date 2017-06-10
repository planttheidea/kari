// methods
import curry from './curry';

// utils
import isArray from './_utils/isArray';
import isObject from './_utils/isObject';
import reduceArray from './_utils/reduceArray';
import reduceObject from './_utils/reduceObject';
import reverseArray from './_utils/reverseArray';

/**
 * @function reduceRight
 *
 * @description
 * reduce the items to a single value based on fn, starting from the end and working backwards
 *
 * @param {function(*, *, (number|string), (Array<*>|Object)): *} the method to reduce the items with
 * @param {Array<*>|Object} items the items to reduce
 * @param {*} initialValue the initial value to start the reduction from
 * @returns {*} the reduced value
 */
export default curry(function reduceRight(fn, initialValue, items) {
  return isObject(items) ? reduceObject(fn, items, initialValue, reverseArray(Object.keys(items))) :
    reduceArray(fn, isArray(items) ? reverseArray(items) : [items], initialValue);
});
