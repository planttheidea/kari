// methods
import curry from './curry';
import forEach from './forEach';

/**
 * @function reduceRight
 *
 * @description
 * reduce the items to a single value based on fn, starting from the end and working backwards
 *
 * @param {function(*, *, (number|string), (Array<*>|Object)): *} the method to reduce the items with
 * @param {Array<*>|Object} items the items to reduce
 * @param {*} initialValue the initial value to start the reduction from
 * @returns {*} the reduced value
 */
export default curry(function reduceRight(fn, items, initialValue) {
  const isInitialValueDefined = initialValue === void 0;
  const reversedItems = [...items].reverse();

  let value = isInitialValueDefined ? reversedItems[0] : initialValue;

  forEach(function(item, index) {
    value = fn(value, item, index, items);
  }, isInitialValueDefined ? reversedItems.slice(1) : reversedItems);

  return value;
});
