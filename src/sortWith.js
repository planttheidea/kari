// methods
import curry from './curry';
import sort from './sort';

/**
 * @function sortWith
 *
 * @param {Array<function>} fns the function to use as comparators (in order of comparison)
 * @param {Array<*>} array the array to sort
 * @returns {Array<*>} the sorted array
 */
export default curry(function sortWith(fns, array) {
  return sort(function(first, second) {
    let result = 0,
        index = -1;

    while (result === 0 && ++index < fns.length) {
      result = fns[index](first, second);
    }

    return result;
  }, array);
});
