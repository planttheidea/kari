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

export const normalizeObject = (object) => {
  if (Array.isArray(object)) {
    return object;
  }

  if (isPrimitive(object)) {
    return [object];
  }

  return isArrayLike(object) ? Array.prototype.slice.call(object, 0) : Object(object);
};
