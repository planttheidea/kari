/**
 * @function findInArray
 *
 * @description
 * find either the index or the item itself in the array
 *
 * @param {function} fn the function to determine the match
 * @param {Array<*>} array the array to search
 * @param {boolean} isIndex should the index be returned instead of the item
 * @returns {*} the item or index returned
 */
export default function findInArray(fn, array, isIndex) {
  let index = -1;

  while (++index < array.length) {
    if (fn(array[index], index, array)) {
      return isIndex ? index : array[index];
    }
  }

  if (isIndex) {
    return -1;
  }
}
