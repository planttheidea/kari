// methods
import curry from './curry';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {getNormalizedResult} from './_internal/normalize';

const findArray = createFindArray(false, true);
const findObject = createFindObject(false, true);

export default curry(function findLast(fn, object) {
  return getNormalizedResult(
    object,
    (normalized) => findArray(normalized, fn),
    (normalized) => findObject(normalized, fn)
  );
});
