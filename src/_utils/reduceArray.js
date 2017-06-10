/**
 * @function reduceArray
 *
 * @description
 * reduce the array to a new value based on the returns of the call with fn
 *
 * @param {function(*, *, number, Array<*>): *} fn the method to map with
 * @param {Array<*>} array the array of items to map
 * @param {*} value the initial value of the reduction
 * @returns {*} the reduced array
 */
export default function reduceArray(fn, array, value) {
  let index = -1;

  if (value === void 0) {
    value = array[0];
    array = array.slice(1);
  }

  while (++index < array.length) {
    value = fn(value, array[index], index, array);
  }

  return value;
}
