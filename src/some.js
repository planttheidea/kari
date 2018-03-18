// methods
import curry from './curry';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {getNormalizedResult} from './_internal/normalize';

const findArray = createFindArray(false, false);
const findObject = createFindObject(false, false);

/**
 * @function some
 *
 * @description
 * do any of the entries in the collection match fn
 *
 * @param {function} fn the function to call on iteration
 * @param {Array<any>|Object} collection the collection to iterate over
 * @returns {boolean} do any entries match
 */
export default curry(function some(fn, collection) {
  return !!getNormalizedResult(
    collection,
    (normalized) => findArray(fn, normalized),
    (normalized) => findObject(fn, normalized)
  );
});
