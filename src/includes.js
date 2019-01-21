// methods
import curry from './curry';
import some from './some';

// utils
import isFunction from './_utils/isFunction';

/**
 * @function includes
 *
 * @description
 * does the array or string include the value passed based on strict equality
 *
 * @param {*} value is the value passed contained in the collection
 * @param {Array<*>|Object|string} collection the collection to test if it contains the value
 * @returns {boolean} does collection contain value
 */
export default curry(function includes(value, collection) {
  return isFunction(collection.indexOf)
    ? !!~collection.indexOf(value)
    : some((valueToCompare) => valueToCompare === value, collection);
});
