// methods
import curry from './curry';
import reduce from './reduce';

// utils
import isArray from './_utils/isArray';
import isObject from './_utils/isObject';

/**
 * @function partitionArray
 *
 * @description
 * partition the array into truthy and falsy values
 *
 * @param {function(*, number, Array<*>)} fn the function that will determine which partition to put the value into
 * @param {Array<*>} array the items to partition
 * @returns {Array<Array<*>>} the partitioned items
 */
function partitionArray(fn, array) {
  let result;

  const reducedPartitions = reduce((partitions, item, index) => {
    result = fn(item, index, array);

    (result ? partitions.truthy : partitions.falsy).push(item);

    return partitions;
  }, array, {
    falsy: [],
    truthy: []
  });

  return [reducedPartitions.truthy, reducedPartitions.falsy];
}

/**
 * @function partitionObject
 *
 * @description
 * partition the array into truthy and falsy values
 *
 * @param {function(*, string, Object)} fn the function that will determine which partition to put the value into
 * @param {Object} object the items to partition
 * @returns {Object} the partitioned items
 */
function partitionObject(fn, object) {
  let result;

  return reduce((partitions, item, key) => {
    result = fn(item, key, object);

    (result ? partitions.truthy : partitions.falsy)[key] = item;

    return partitions;
  }, object, {
    falsy: {},
    truthy: {}
  });
}

/**
 * @function partition
 *
 * @description
 * partition the items into truthy and falsy values
 *
 * @param {function(*, (number|string), (Array<*>|Object))}
 * fn the function that will determine which partition to put the value into
 * @param {Array<*>|Object} items the items to partition
 * @returns {Array<Array<*>>|Object} the partitioned items
 */
export default curry(function partition(fn, items) {
  return isObject(items) ? partitionObject(fn, items) : partitionArray(fn, isArray(items) ? items : [items]);
});
