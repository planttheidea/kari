// methods
import curry from './curry';

// utils
import {getNormalizedResult} from './_internal/normalize';
import {reduceArray, reduceObject} from './_internal/reduce';

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
const getCorrectPartition = (partitions, result, isArray) =>
  (result ? (isArray ? partitions[0] : partitions.truthy) : isArray ? partitions[1] : partitions.falsy);

const addToArrayPartition = (partition, value) => partition.push(value);

const addToObjectPartition = (partition, value, key) => (partition[key] = value);

const createInitialValue = (isArray) => (isArray ? [[], []] : {falsy: {}, truthy: {}});

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
  const createHandler = (addToPartition, isArray) =>
    function(partitions, value, key, object) {
      addToPartition(getCorrectPartition(partitions, fn(value, key, object), isArray), value, key);

      return partitions;
    };

  return getNormalizedResult(
    collection,
    (normalized) => reduceArray(createHandler(addToArrayPartition, true), createInitialValue(true), normalized),
    (normalized) => reduceObject(createHandler(addToObjectPartition, false), createInitialValue(false), normalized)
  );
});
