// methods
import curry from './curry';
import forEach from './forEach';

/**
 * @function reduce
 *
 * @description
 * reduce the items to a single value based on fn
 *
 * @param {function(*, *, (number|string), (Array<*>|Object)): *} the method to reduce the items with
 * @param {Array<*>|Object} items the items to reduce
 * @param {*} initialValue the initial value to start the reduction from
 * @returns {*} the reduced value
 */
export default curry(function reduce(fn, items, initialValue) {
  const isInitialValueDefined = initialValue === void 0;
  const itemsToIterate = isInitialValueDefined ? items.slice(1) : items;

  let value = isInitialValueDefined ? items[0] : initialValue;

  forEach((item, index) => {
    value = fn(value, item, index, items);
  }, itemsToIterate);

  return value;
});
