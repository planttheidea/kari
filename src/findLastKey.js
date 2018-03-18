// methods
import curry from './curry';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {getNormalizedResult} from './_internal/normalize';

const findArray = createFindArray(true, true);
const findObject = createFindObject(true, true);

export default curry(function findLast(fn, object) {
  return getNormalizedResult(
    object,
    (normalized) => findArray(fn, normalized),
    (normalized) => findObject(fn, normalized)
  );
});
