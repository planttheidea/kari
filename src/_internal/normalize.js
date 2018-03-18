// utils
import {isArrayLike, isPrimitive} from './is';

/**
 * @function assignFallback
 *
 * @description
 * shallowly merge the objects passed into a new object
 *
 * @param {...Array<Object>} objects the objects to merge
 * @returns {Object} the merged object
 */
export function assignFallback(...objects) {
  let finalObject = objects.shift(),
      object;

  for (let index = 0; index < objects.length; index++) {
    object = objects[index];

    for (let key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        finalObject[key] = object[key];
      }
    }
  }

  return finalObject;
}

/**
 * @function assign
 *
 * @description
 * shallowly merge the objects passed into a new object
 *
 * @param {...Array<Object>} objects the objects to merge
 * @returns {Object} the merged object
 */
export const assign = Object.assign || assignFallback;

/**
 * @function identity
 *
 * @description
 * function that allows straightforward passthrough of the first argument passed
 *
 * @param {*} value the value passed
 * @returns {*} the first argument passed
 */
export const identity = (value) => value;

/**
 * @function getNoramlizedResult
 *
 * @description
 * get the result of the callbacks called on the normalized value
 *
 * @param {any} value the value to normalize
 * @param {function} onArray callback for normalized arrays
 * @param {function} onObject callback for normalized objects
 * @returns {any} the result of the callback
 */
export const getNormalizedResult = (value, onArray, onObject) => {
  if (Array.isArray(value)) {
    return onArray(value);
  }

  if (isPrimitive(value)) {
    return onArray([value]);
  }

  if (isArrayLike(value)) {
    return onArray(Array.prototype.slice.call(value, 0));
  }

  return onObject(Object(value));
};

/**
 * @function getNormalizedCollection
 *
 * @description
 * get the normalized collection value of the value passed
 *
 * @param {any} value the value to normalize
 * @returns {Array<any>|Object} the normalized collection
 */
export const getNormalizedCollection = (value) => getNormalizedResult(value, identity, identity);
