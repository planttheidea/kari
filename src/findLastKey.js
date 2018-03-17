// methods
import curry from './curry';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {normalizeObject} from './_internal/normalize';

export const findArray = createFindArray(true, true);
export const findObject = createFindObject(true, true);

export default curry(function findLastKey(fn, object) {
  const normalizedObject = normalizeObject(object);
  const findMethod = Array.isArray(normalizedObject) ? findArray : findObject;

  return findMethod(normalizedObject, fn);
});
