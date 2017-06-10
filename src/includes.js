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
 * @param {*} value is the value passed contained in the object
 * @param {Array<*>|Object|string} object the object to test if it contains the value
 * @returns {boolean} does object contain value
 */
export default curry(function includes(value, object) {
  return isFunction(object.indexOf) ? !!~object.indexOf(value) : some(function(valueToCompare) {
    return valueToCompare === value;
  }, object);
});
