// methods
import curry from './curry';
import forEach from './forEach';

/**
 * @function pluck
 *
 * @description
 * get the values from the array of objects when the key is present in the object
 *
 * @param {string} key the key to find in the objects in items
 * @param {Array<Object>} items the array of items to get from
 * @returns {Array<*>} the values at key in the array of objects
 */
export default curry(function pluck(key, items) {
  let pluckedItems = [];

  forEach((item) => {
    if (item.hasOwnProperty(key)) {
      pluckedItems.push(item[key]);
    }
  }, items);

  return pluckedItems;
});
