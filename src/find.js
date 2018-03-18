// methods
import curry from './curry';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {getNormalizedResult} from './_internal/normalize';

const findArray = createFindArray(false, false);
const findObject = createFindObject(false, false);

/**
 * @function find
 *
 * @description
 * find the item in the collection passed
 *
 * @param {function} fn the function to find the matching item with
 * @param {Array<any>|Object} collection the collection to find the item from
 * @returns {any} the matching item
 */
export default curry(function find(fn, collection) {
  return getNormalizedResult(
    collection,
    (normalized) => findArray(fn, normalized),
    (normalized) => findObject(fn, normalized)
  );
});
