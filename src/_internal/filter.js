// utils
import {normalizeObject} from './normalize';

export function filterObject(object, fn) {
  let keys = Object.keys(object),
      newObject = {},
      key;

  for (let index = 0; index < keys.length; index++) {
    key = keys[index];

    if (fn(object[key], key, object)) {
      newObject[key] = object[key];
    }
  }

  return newObject;
}

export function filter(fn, object) {
  const normalizedObject = normalizeObject(object);

  return Array.isArray(normalizedObject) ? normalizedObject.filter(fn) : filterObject(normalizedObject, fn);
}
