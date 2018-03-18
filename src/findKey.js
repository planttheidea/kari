// methods
import curry from './curry';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {getNormalizedResult} from './_internal/normalize';

const findArray = createFindArray(true, false);
const findObject = createFindObject(true, false);

/**
 * @function findKey
 *
 * @description
 * find the key of an item in the collection passed
 *
 * @param {function} fn the function to find the matching item with
 * @param {Array<any>|Object} collection the collection to find the item from
 * @returns {string} the matching item key
 */
export default curry(function findKey(fn, collection) {
  return getNormalizedResult(
    collection,
    (normalized) => findArray(fn, normalized),
    (normalized) => findObject(fn, normalized)
  );
});
