// methods
import curry from './curry';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {getNormalizedResult} from './_internal/normalize';

const findArray = createFindArray(false, false);
const findObject = createFindObject(false, false);

export default curry(function every(fn, object) {
  const findHandler = function() {
    return !fn.apply(this, arguments);
  };

  return getNormalizedResult(
    object,
    (normalized) => !findArray(normalized, findHandler),
    (normalized) => !findObject(normalized, findHandler)
  );
});
