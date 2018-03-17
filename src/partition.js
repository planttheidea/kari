// methods
import curry from './curry';

// utils
import {normalizeObject} from './_internal/normalize';
import {reduce} from './_internal/reduce';

/**
 * @function getCorrectPartition
 *
 * @description
 * based on the result being truthy or not, return the correct
 * partition (either truthy or falsy)
 *
 * @param {{falsy: (Array<*>|Object), truthy: (Array<*>|Object)}} partitions the truthy and falsy partitions
 * @param {*} result the result to determine the partition
 * @param {boolean} isArray is the collection an array
 * @returns {Array<*>|Object} either the truthy or falsy partition
 */
function getCorrectPartition(partitions, result, isArray) {
  return result ? (isArray ? partitions[0] : partitions.truthy) : isArray ? partitions[1] : partitions.falsy;
}

function addToArrayPartition(partition, value) {
  partition.push(value);
}

function addToObjectPartition(partition, value, key) {
  partition[key] = value;
}

function createInitialValue(isArray) {
  return isArray
    ? [[], []]
    : {
      falsy: {},
      truthy: {}
    };
}

/**
 * @function partition
 *
 * @description
 * partition the collection into truthy and falsy values
 *
 * @param {function(*, (number|string), (Array<*>|Object))}
 * fn the function that will determine which partition to put the value into
 * @param {Array<*>|Object} collection the collection to partition
 * @returns {Array<Array<*>>|Object} the partitioned collection
 */
export default curry(function partition(fn, collection) {
  const normalizedCollection = normalizeObject(collection);
  const isCollectionArray = Array.isArray(normalizedCollection);
  const addToPartition = isCollectionArray ? addToArrayPartition : addToObjectPartition;

  return reduce(
    function getObjectPartitions(partitions, value, key, object) {
      addToPartition(getCorrectPartition(partitions, fn(value, key, object), isCollectionArray), value, key);

      return partitions;
    },
    createInitialValue(isCollectionArray),
    normalizedCollection
  );
});
