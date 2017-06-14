// methods
import curry from './curry';
import reduce from './reduce';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isObject from './_utils/isObject';

/**
 * @function pluck
 *
 * @description
 * get the values from the collection of objects when the key is present in the object
 *
 * @param {string} key the key to find in the objects in items
 * @param {Array<Object>} collection the collection of items to get from
 * @returns {Array<*>} the values at key in the collection of objects
 */
export default curry(function pluck(key, collection) {
  return reduce((pluckedItems, item) => {
    if (item.hasOwnProperty(key)) {
      pluckedItems.push(item[key]);
    }

    return pluckedItems;
  }, [], isObject(collection) ? collection : coalesceToArray(collection));
});
