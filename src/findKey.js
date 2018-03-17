// methods
import curry from './curry';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {normalizeObject} from './_internal/normalize';

export const findArray = createFindArray(true, false);
export const findObject = createFindObject(true, false);

export default curry(function findKey(fn, object) {
  const normalizedObject = normalizeObject(object);
  const findMethod = Array.isArray(normalizedObject) ? findArray : findObject;

  return findMethod(normalizedObject, fn);
});
