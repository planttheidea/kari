// external dependencies
import curry from './curry';

// utils
import {normalizeObject} from './_internal/normalize';
import {reduceObject} from './_internal/reduce';

export default curry(function map(fn, object) {
  const normalizedObject = normalizeObject(object);

  return Array.isArray(normalizedObject)
    ? normalizedObject.map(fn)
    : reduceObject(
      normalizedObject,
      function(mappedObject, value, key, objectBeingMapped) {
        mappedObject[key] = fn(objectBeingMapped[key], key, objectBeingMapped);

        return mappedObject;
      },
      {}
    );
});
