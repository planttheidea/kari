// methods
import curry from './curry';

// utils
import {isComplexObject} from './_internal/is';
import {reduce} from './_internal/reduce';

const createPickArray = (indices) =>
  function(newArray, value, index) {
    if (~indices.indexOf(index)) {
      newArray.push(value);
    }

    return newArray;
  };

const createPickObject = (object) =>
  function pickObject(newObject, key) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }

    return newObject;
  };

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
  return Array.isArray(collection)
    ? reduce(createPickArray(keys), [], collection)
    : isComplexObject(collection) ? reduce(createPickObject(collection), {}, keys) : {};
});
