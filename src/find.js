// methods
import curry from './curry';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {getNormalizedResult} from './_internal/normalize';

const findArray = createFindArray(false, false);
const findObject = createFindObject(false, false);

export default curry(function find(fn, object) {
  return getNormalizedResult(
    object,
    (normalized) => findArray(fn, normalized),
    (normalized) => findObject(fn, normalized)
  );
});
