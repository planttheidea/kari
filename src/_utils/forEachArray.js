/**
 * @function forEachArray
 *
 * @description
 * iterate over each of the items
 *
 * @param {function(*, (number), (Array<*>)): *} fn the function to iterate over the items
 * @param {Array<*>} array the items to iterate over
 * @returns {Array<*>} the items passed
 */
export default function forEachArray(fn, array) {
  let index = -1;

  while (++index < array.length) {
    fn(array[index], index, array);
  }

  return array;
}
