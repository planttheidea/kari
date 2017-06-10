// methods
import curry from './curry';
import reduce from './reduce';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import isObject from './_utils/isObject';

/**
 * @function getCorrectPartition
 *
 * @description
 * based on the result being truthy or not, return the correct
 * partition (either truthy or falsy)
 *
 * @param {{falsy: (Array<*>|Object), truthy: (Array<*>|Object)}} partitions the truthy and falsy partitions
 * @param {*} result the result to determine the partition
 * @returns {Array<*>|Object} either the truthy or falsy partition
 */
function getCorrectPartition(partitions, result) {
  return result ? partitions.truthy : partitions.falsy;
}

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
  const reducedPartitions = reduce(function(partitions, item, index) {
    getCorrectPartition(partitions, fn(item, index, array)).push(item);

    return partitions;
  }, {
    falsy: [],
    truthy: []
  }, array);

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
  return reduce(function(partitions, item, key) {
    getCorrectPartition(partitions, fn(item, key, object))[key] = item;

    return partitions;
  }, {
    falsy: {},
    truthy: {}
  }, object);
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
  return isObject(items) ? partitionObject(fn, items) : partitionArray(fn, coalesceToArray(items));
});
