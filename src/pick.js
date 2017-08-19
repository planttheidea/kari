// methods
import curry from './curry';
import filter from './filter';
import reduce from './reduce';

// utils
import isArray from './_utils/isArray';
import isObject from './_utils/isObject';

/**
 * @function pickArray
 *
 * @description
 * pick the values from the given array based on the existence of the indices
 *
 * @param {Array<number>} indices the indices to match
 * @param {Array<*>} array the array to pick from
 * @returns {Array<*>} the array with the picked values
 */
function pickArray(indices, array) {
  return filter(function(ignored, index) {
    return ~indices.indexOf(index);
  }, array);
}

/**
 * @function pickObject
 *
 * @description
 * pick the values from the given object based on the existence of the keys
 *
 * @param {Array<number>} keys the keys to match
 * @param {Array<*>} object the object to pick from
 * @returns {Array<*>} the object with the picked values
 */
function pickObject(keys, object) {
  return reduce(
    function(newObject, key) {
      if (object.hasOwnProperty(key)) {
        newObject[key] = object[key];
      }

      return newObject;
    },
    {},
    keys
  );
}

/**
 * @function pick
 *
 * @description
 * pick specific keys from the object passed
 *
 * @param {Array<number|string>} keys the keys to pick from the object
 * @param {Array<*>|Object} collection the object to pick the keys from
 * @returns {Array<*>|Object} the object with specific keys picked
 */
export default curry(function pick(keys, collection) {
  return isArray(collection) ? pickArray(keys, collection) : isObject(collection) ? pickObject(keys, collection) : {};
});
