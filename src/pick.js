// methods
import curry from './curry';
import filter from './filter';
import reduce from './reduce';

// utils
import isArray from './_utils/isArray';
import isObject from './_utils/isObject';

function pickArray(keys, array) {
  return filter((ignored, index) => {
    return ~keys.indexOf(index);
  }, array);
}

function pickObject(keys, object) {
  return reduce((newObject, key) => {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }

    return newObject;
  }, keys, {});
}

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
  if (isObject(items)) {
    return pickObject(keys, items);
  }

  if (isArray(items)) {
    return pickArray(keys, items);
  }

  return {};
});
