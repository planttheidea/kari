// external dependencies
import curry from './curry';

// utils
import {normalizeObject} from './_internal/normalize';
import {reduceObject} from './_internal/reduce';

function createForEachObjectValue(fn) {
  return function forEachObjectValue(ignored, value, key, object) {
    fn(value, key, object);

    return ignored;
  };
}

export default curry(function forEach(fn, object) {
  const normalizedObject = normalizeObject(object);

  if (Array.isArray(normalizedObject)) {
    normalizedObject.forEach(fn);
  } else {
    reduceObject(normalizedObject, createForEachObjectValue(fn), null);
  }

  return normalizedObject;
});
