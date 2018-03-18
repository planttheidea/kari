// methods
import curry from './curry';
import notBy from './notBy';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {getNormalizedResult} from './_internal/normalize';

const findArray = createFindArray(false, false);
const findObject = createFindObject(false, false);

export default curry(function every(fn, object) {
  return getNormalizedResult(
    object,
    (normalized) => !findArray(notBy(fn), normalized),
    (normalized) => !findObject(notBy(fn), normalized)
  );
});
