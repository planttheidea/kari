// methods
import curry from './curry';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {getNormalizedResult} from './_internal/normalize';

const findArray = createFindArray(true, false);
const findObject = createFindObject(true, false);

export default curry(function findKey(fn, object) {
  return getNormalizedResult(
    object,
    (normalized) => findArray(fn, normalized),
    (normalized) => findObject(fn, normalized)
  );
});
