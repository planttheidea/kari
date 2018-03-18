// methods
import curry from './curry';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {getNormalizedResult} from './_internal/normalize';

const findArray = createFindArray(false, true);
const findObject = createFindObject(false, true);

/**
 * @function findLast
 *
 * @description
 * find the item in the collection passed starting from the end of the collection
 * and iterating to the front
 *
 * @param {function} fn the function to find the matching item with
 * @param {Array<any>|Object} collection the collection to find the item from
 * @returns {any} the matching item
 */
export default curry(function findLast(fn, collection) {
  return getNormalizedResult(
    collection,
    (normalized) => findArray(fn, normalized),
    (normalized) => findObject(fn, normalized)
  );
});
