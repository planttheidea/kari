// methods
import curry from './curry';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {getNormalizedResult} from './_internal/normalize';

const findArray = createFindArray(true, true);
const findObject = createFindObject(true, true);

/**
 * @function findLastKey
 *
 * @description
 * find the key of an item in the collection passed starting from the end of the collection
 * and iterating to the front
 *
 * @param {function} fn the function to find the matching item with
 * @param {Array<any>|Object} collection the collection to find the item from
 * @returns {string} the matching item key
 */
export default curry(function findLastKey(fn, collection) {
  return getNormalizedResult(
    collection,
    (normalized) => findArray(fn, normalized),
    (normalized) => findObject(fn, normalized)
  );
});
