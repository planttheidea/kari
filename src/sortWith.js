// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';

/**
 * @function sortWith
 *
 * @param {Array<function>} fns the function to use as comparators (in order of comparison)
 * @param {Array<*>} array the array to sort
 * @returns {Array<*>} the sorted array
 */
export default curry(function sortBy(fns, array) {
  return [...coalesceToArray(array)].sort((first, second) => {
    let result = 0,
        index = -1;

    while (result === 0 && ++index < fns.length) {
      result = fns[index](first, second);
    }

    return result;
  });
});
