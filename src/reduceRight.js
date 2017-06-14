// methods
import curry from './curry';
import reduce from './reduce';

// utils
import reverse from './_utils/reverse';

/**
 * @function reduceRight
 *
 * @description
 * reduce the collection to a single value based on fn, starting from the end and working backwards
 *
 * @param {function(*, *, (number|string), (Array<*>|Object)): *} the method to reduce the collection with
 * @param {Array<*>|Object} collection the collection to reduce
 * @param {*} initialValue the initial value to start the reduction from
 * @returns {*} the reduced value
 */
export default curry(function reduceRight(fn, initialValue, collection) {
  return reduce(fn, initialValue, reverse(collection));
});
