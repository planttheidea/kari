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
 * reduce the collection to a single value based on fn
 *
 * @param {function(*, *, (number|string), (Array<*>|Object)): *} the method to reduce the collection with
 * @param {Array<*>|Object} collection the collection to reduce
 * @param {*} initialValue the initial value to start the reduction from
 * @returns {*} the reduced value
 */
export default curry(function reduce(fn, initialValue, collection) {
  return isObject(collection)
    ? reduceObject(fn, collection, initialValue, Object.keys(collection))
    : reduceArray(fn, coalesceToArray(collection), initialValue);
});
