// utils
import {normalizeObject} from './normalize';

export function reduceObject(object, fn, initialValue) {
  let keys = Object.keys(object),
      value = initialValue,
      key;

  if (typeof initialValue === 'undefined') {
    key = keys.shift();
    value = object[key];
  }

  for (let index = 0; index < keys.length; index++) {
    key = keys[index];

    value = fn(value, object[key], key, object);
  }

  return value;
}

export function reduceRightObject(object, fn, initialValue) {
  let keys = Object.keys(object),
      value = initialValue,
      key;

  if (typeof initialValue === 'undefined') {
    key = keys.pop();
    value = object[key];
  }

  for (let index = keys.length - 1; index >= 0; index--) {
    key = keys[index];

    value = fn(value, object[key], key, object);
  }

  return value;
}

export function reduce(fn, initialValue, object) {
  const normalizedObject = normalizeObject(object);

  return Array.isArray(normalizedObject)
    ? normalizedObject.reduce(fn, initialValue)
    : reduceObject(normalizedObject, fn, initialValue);
}

export function reduceRight(fn, initialValue, object) {
  const normalizedObject = normalizeObject(object);

  return Array.isArray(normalizedObject)
    ? normalizedObject.reduceRight(fn, initialValue)
    : reduceRightObject(normalizedObject, fn, initialValue);
}
