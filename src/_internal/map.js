// utils
import {normalizeObject} from './normalize';

export function mapObject(object, fn) {
  let keys = Object.keys(object),
      newObject = {},
      key;

  for (let index = 0; index < keys.length; index++) {
    key = keys[index];

    newObject[key] = fn(object[key], key, object);
  }

  return newObject;
}

export function map(fn, object) {
  const normalizedObject = normalizeObject(object);

  return Array.isArray(normalizedObject) ? normalizedObject.map(fn) : mapObject(normalizedObject, fn);
}
