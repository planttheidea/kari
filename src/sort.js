// external dependencies
import curry from './curry';

// utils
import {normalizeObject} from './_internal/normalize';
import {reduce} from './_internal/reduce';

export function sortArray(object, fn) {
  const clone = object.slice(0);

  clone.sort(fn);

  return clone;
}

export function sortObject(object, fn) {
  const keys = Object.keys(object);

  keys.sort(
    typeof fn === 'function'
      ? (a, b) => {
        return fn(object[a], object[b]);
      }
      : undefined
  );

  return reduce(
    (sortedObject, key) => {
      sortedObject[key] = object[key];

      return sortedObject;
    },
    {},
    keys
  );
}

export default curry(function sort(fn, object) {
  const normalizedObject = normalizeObject(object);
  const normalizedFn = typeof fn === 'function' ? fn : undefined;
  const sortMethod = Array.isArray(normalizedObject) ? sortArray : sortObject;

  return sortMethod(object, normalizedFn);
});
