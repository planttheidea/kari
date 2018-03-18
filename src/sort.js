// external dependencies
import curry from './curry';

// utils
import {getNormalizedResult} from './_internal/normalize';
import {reduce} from './_internal/reduce';

function sortArray(object, fn) {
  const clone = object.slice(0);

  clone.sort(fn);

  return clone;
}

function sortObject(object, fn) {
  const keys = Object.keys(object);

  keys.sort(typeof fn === 'function' ? (a, b) => fn(object[a], object[b]) : undefined);

  return reduce(
    (sortedObject, key) => {
      sortedObject[key] = object[key];

      return sortedObject;
    },
    {},
    keys
  );
}

export default curry(function sort(fn, collection) {
  const normalizedFn = typeof fn === 'function' ? fn : undefined;

  return getNormalizedResult(
    collection,
    (normalized) => sortArray(normalized, normalizedFn),
    (normalized) => sortObject(normalized, normalizedFn)
  );
});
