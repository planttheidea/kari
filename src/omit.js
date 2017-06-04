// methods
import curry from './curry';
import filter from './filter';
import reduce from './reduce';

// utils
import isArray from './_utils/isArray';
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
  if (isArray(object)) {
    return filter((ignored, index) => {
      return !~keys.indexOf(index);
    }, object);
  }

  if (isObject(object)) {
    return reduce((newObject, key) => {
      if (!~keys.indexOf(key)) {
        newObject[key] = object[key];
      }

      return newObject;
    }, Object.keys(object), {});
  }

  return object;
});
