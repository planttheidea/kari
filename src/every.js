// methods
import curry from './curry';
import notBy from './notBy';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {getNormalizedResult} from './_internal/normalize';

const findArray = createFindArray(false, false);
const findObject = createFindObject(false, false);

/**
 * @function every
 *
 * @description
 * does every iteration match the fn passed
 *
 * @param {function} fn the function to test every item in the collection with
 * @param {Array<any>|Object} collection the collection to iterate over
 * @returns {boolean} does every iteration match
 */
export default curry(function every(fn, collection) {
  return getNormalizedResult(
    collection,
    (normalized) => !findArray(notBy(fn), normalized),
    (normalized) => !findObject(notBy(fn), normalized)
  );
});
