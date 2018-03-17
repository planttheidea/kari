// external dependencies
import curry from './curry';

// utils
import {normalizeObject} from './_internal/normalize';
import {reduceObject} from './_internal/reduce';

export default curry(function filter(fn, object) {
  const normalizedObject = normalizeObject(object);

  return Array.isArray(normalizedObject)
    ? normalizedObject.filter(fn)
    : reduceObject(
      normalizedObject,
      function(mappedObject, value, key, objectBeingMapped) {
        if (fn(objectBeingMapped[key], key, objectBeingMapped)) {
          mappedObject[key] = objectBeingMapped[key];
        }

        return mappedObject;
      },
      {}
    );
});
