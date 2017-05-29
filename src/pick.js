// methods
import curry from './curry';
import filter from './filter';
import reduce from './reduce';

// utils
import {
  isArray,
  isObject
} from './_utils/is';

/**
 * @function pick
 *
 * @description
 * pick specific keys from the object passed
 *
 * @param {Array<number|string>} keys the keys to pick from the object
 * @param {Array<*>|Object} items the object to pick the keys from
 * @returns {Array<*>|Object} the object with specific keys picked
 */
export default curry(function pick(keys, items) {
  if (isArray(items)) {
    return filter((ignored, index) => {
      return ~keys.indexOf(index);
    }, items);
  }

  if (isObject(items)) {
    return reduce((newObject, key) => {
      if (items.hasOwnProperty(key)) {
        newObject[key] = items[key];
      }

      return newObject;
    }, keys, {});
  }

  return items;
});
