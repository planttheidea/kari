// methods
import curry from './curry';
import get from './get';
import has from './has';

// utils
import {normalizeObject} from './_internal/normalize';
import {reduce} from './_internal/reduce';

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

  return reduce(
    (pluckedItems, item) => {
      if (hasAtPath(item)) {
        pluckedItems.push(getFromPath(item));
      }

      return pluckedItems;
    },
    [],
    normalizeObject(collection)
  );
});
