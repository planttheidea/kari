// utils
import {isArrayLike, isPrimitive} from './is';

export function assignFallback(...objects) {
  let finalObject = {},
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

export const getNormalizedResult = (object, onArray, onObject) => {
  if (Array.isArray(object)) {
    return onArray(object);
  }

  if (isPrimitive(object)) {
    return onArray([object]);
  }

  if (isArrayLike(object)) {
    return onArray(Array.prototype.slice.call(object, 0));
  }

  return onObject(Object(object));
};

export const getNormalizedCollection = (object) => getNormalizedResult(object, identity, identity);
