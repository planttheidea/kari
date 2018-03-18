// methods
import curry from './curry';
import get from './get';
import has from './has';
import reduce from './reduce';

// utils
import {getNormalizedResult} from './_internal/normalize';

/**
 * @function pluck
 *
 * @description
 * get the values from the collection of objects when the key is present in the object
 *
 * @param {string} path the path to find in the objects in items
 * @param {Array<Object>} collection the collection of items to get from
 * @returns {Array<*>} the values at key in the collection of objects
 */
export default curry(function pluck(path, collection) {
  const getFromPath = get(path);
  const hasAtPath = has(path);

  const handler = reduce((pluckedItems, item) => {
    if (hasAtPath(item)) {
      pluckedItems.push(getFromPath(item));
    }

    return pluckedItems;
  }, []);

  return getNormalizedResult(collection, (normalized) => handler(normalized), (normalized) => handler(normalized));
});
