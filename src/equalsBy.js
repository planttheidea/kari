// methods
import curry from './curry';
import equals from './equals';

/**
 * @function equalsBy
 *
 * @description
 * are the values passed equal based on the same value equality comparison, but after some transformation
 * performed by fn
 *
 * @param {function} fn the transformation function
 * @param {*} firstValue the first value to compare
 * @param {*} secondValue the second value to compare
 * @returns {boolean} are the trnasformed first and second values equal
 */
export default curry(function equalsBy(fn, firstValue, secondValue) {
  return equals(fn(firstValue), fn(secondValue));
});
