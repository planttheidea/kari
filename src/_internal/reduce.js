// utils
import {getNormalizedResult} from './normalize';

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
  return getNormalizedResult(
    object,
    (normalized) => normalized.reduce(fn, initialValue),
    (normalized) => reduceObject(normalized, fn, initialValue)
  );
}

export function reduceRight(fn, initialValue, collection) {
  return getNormalizedResult(
    collection,
    (normalized) => normalized.reduceRight(fn, initialValue),
    (normalized) => reduceRightObject(normalized, fn, initialValue)
  );
}
