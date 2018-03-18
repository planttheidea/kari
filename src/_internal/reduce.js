// utils
import {getNormalizedResult} from './normalize';

export function reduceArray(fn, initialValue, array) {
  let value = initialValue;

  if (initialValue === void 0) {
    value = array.shift();
  }

  for (let index = 0; index < array.length; index++) {
    value = fn(value, array[index], index, array);
  }

  return value;
}

export function reduceRightArray(fn, initialValue, array) {
  let value = initialValue;

  if (initialValue === void 0) {
    value = array.pop();
  }

  for (let index = array.length - 1; index >= 0; index--) {
    value = fn(value, array[index], index, array);
  }

  return value;
}

export function reduceObject(fn, initialValue, object) {
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

export function reduceRightObject(fn, initialValue, object) {
  let keys = Object.keys(object),
      value = initialValue,
      key;

  if (initialValue === void 0) {
    key = keys.pop();
    value = object[key];
  }

  for (let index = keys.length - 1; index >= 0; index--) {
    key = keys[index];

    value = fn(value, object[key], key, object);
  }

  return value;
}

export function reduce(fn, initialValue, collection) {
  return getNormalizedResult(
    collection,
    (normalized) => reduceArray(fn, initialValue, normalized),
    (normalized) => reduceObject(fn, initialValue, normalized)
  );
}

export function reduceRight(fn, initialValue, collection) {
  return getNormalizedResult(
    collection,
    (normalized) => reduceRightArray(fn, initialValue, normalized),
    (normalized) => reduceRightObject(fn, initialValue, normalized)
  );
}
