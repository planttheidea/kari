// methods
import curry from './curry';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {normalizeObject} from './_internal/normalize';

export const findArray = createFindArray(false, false);
export const findObject = createFindObject(false, false);

export default curry(function every(fn, object) {
  const normalizedObject = normalizeObject(object);
  const findMethod = Array.isArray(normalizedObject) ? findArray : findObject;

  return !findMethod(normalizedObject, function() {
    return !fn.apply(this, arguments);
  });
});
