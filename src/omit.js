// methods
import curry from './curry';
import filter from './filter';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isObject from './_utils/isObject';

/**
 * @function omit
 *
 * @description
 * get a new object with the keys passed omitted from the original
 *
 * @param {Array<number|string>} keys the keys whose values should be omitted from the original object
 * @param {Array<*>|Object} object the object to get the values from
 * @returns {Array<*>|Object} the original object with the keys passed omitted
 */
export default curry(function omit(keys, object) {
  return filter(function(ignored, index) {
    return !~keys.indexOf(index);
  }, isObject(object) ? object : coalesceToArray(object));
});
