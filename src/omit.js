// methods
import curry from './curry';
import equals from './equals';
import findIndex from './findIndex';
import reduce from './reduce';
import set from './set';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import getPath from './_utils/getPath';
import isNumber from './_utils/isNumber';
import isObject from './_utils/isObject';

/**
 * @function getExistingPath
 *
 * @description
 * does the path already exist minus the final item
 *
 * @param {Array<number|string>} path the path to check
 * @param {Array<Array<number|string>>} existingPaths the existing paths
 * @returns {number} the index of the existing path
 */
function getExistingPath(path, existingPaths) {
  return findIndex((existingPath) => equals(existingPath.slice(0, -1), path.slice(0, -1)), existingPaths);
}

/**
 * @function getConsolidatedPaths
 *
 * @description
 * partial function to get the array of paths consolidated if the final item in the path is an index
 *
 * @param {Array} consolidatedPaths the array to assign the consolidated paths
 * @param {Array<string>} keys the current keys
 * @returns {Array<Array<number|string>>} the array of consolidated paths
 */
const getConsolidatedPaths = reduce((consolidatedPaths, key) => {
  const path = getPath(key);
  const lastPathIndex = path.length - 1;
  const finalPathItem = path[lastPathIndex];

  let pathToAssign = path;

  if (isNumber(finalPathItem)) {
    const matchingIndex = getExistingPath(path, consolidatedPaths);

    if (~matchingIndex) {
      const match = consolidatedPaths[matchingIndex];
      const lastMatchIndex = match.length - 1;
      const newLastPathItem = set(lastMatchIndex, [...match[lastMatchIndex], finalPathItem], match);

      return [
        ...consolidatedPaths.slice(0, matchingIndex),
        newLastPathItem,
        ...consolidatedPaths.slice(matchingIndex + 1),
      ];
    }

    pathToAssign = set(lastPathIndex, [finalPathItem], path);
  }

  consolidatedPaths.push(pathToAssign);

  return consolidatedPaths;
});

/**
 * @function removeKeyFromObject
 *
 * @description
 * immutably remove a given key from the object passed
 *
 * @param {string} key the key to remove
 * @param {Object} object the object to update
 * @returns {Object} a shallow clone of the object passed, minus the key
 */
function removeKeyFromObject(key, object) {
  const {[key]: keyIgnored, ...newObject} = object;

  return newObject;
}

/**
 * @function removeIndicesFromArray
 *
 * @description
 * immutably remove the indices from the array passed
 *
 * @param {Array<number>} indices the indices to remove
 * @param {Array<*>} array the array to update
 * @returns {Array<*>} a shallow clone of the array passed, minus the index
 */
function removeIndicesFromArray(indices, array) {
  if (!indices.length) {
    return array;
  }

  let indexToRemove = indices.shift();

  return reduce(
    (newArray, item, index) => {
      if (index !== indexToRemove) {
        return [...newArray, item];
      }

      indexToRemove = indices.shift();

      return newArray;
    },
    [],
    array
  );
}

/**
 * @function getCleanCollection
 *
 * @description
 * shallowly clone the collection passed
 *
 * @param {Array<*>|Object} collection the collection to clone
 * @param {boolean} isCollectionObject is the collection passed an object
 * @returns {Array<*>|Object} a shallow clone of the collection
 */
function getCleanCollection(collection, isCollectionObject) {
  return isCollectionObject ? {...collection} : [...collection];
}

/**
 * @function omitNested
 *
 * @description
 * remove the nested value at the path provided
 *
 * @param {Array<number|string>} path the path of the nested key
 * @param {Array<*>|Object} collection the collection to update
 * @param {boolean} isCollectionObject is the collection an object
 * @returns {Array<*>|Object} the updated collection
 */
function omitNested(path, collection, isCollectionObject) {
  const nextPath = path.shift();
  const cleanCollection = getCleanCollection(collection, isCollectionObject);

  if (!path.length) {
    const removeMethod = isCollectionObject ? removeKeyFromObject : removeIndicesFromArray;

    return removeMethod(nextPath, cleanCollection);
  }

  /* eslint-disable no-use-before-define */
  const omitMethod = isObject(cleanCollection[nextPath]) ? omitFromObject : omitFromArray;
  /* eslint-enable */

  collection[nextPath] = omitMethod(cleanCollection[nextPath], [path]);

  return collection;
}

/**
 * @function omitFromArray
 *
 * @description
 * remove the items at the paths location from the array
 *
 * @param {Array<*>} array the array to remove the paths from
 * @param {Array<string>} paths the paths to remove
 * @returns {Array<*>} the omitted array
 */
function omitFromArray(array, paths) {
  let indicesToRemove = [];

  const newCollection = reduce(
    (deeplyNestedOmittedCollection, path) => {
      if (path.length > 1) {
        return omitNested(path, deeplyNestedOmittedCollection, true);
      }

      indicesToRemove = [...indicesToRemove, ...path[0]];

      return deeplyNestedOmittedCollection;
    },
    array,
    paths
  );

  return removeIndicesFromArray(indicesToRemove, newCollection);
}

/**
 * @function omitFromObject
 *
 * @description
 * remove the items at the paths location from the object
 *
 * @param {Object} object the object to remove the keys from
 * @param {Array<string>} paths the paths to remove
 * @returns {Object} the omitted object
 */

const omitFromObject = reduce((newCollection, path) => omitNested(path, newCollection, true));

/**
 * @function omit
 *
 * @description
 * get a new object with the keys passed omitted from the original
 *
 * @param {Array<number|string>} keys the keys whose values should be omitted from the original object
 * @param {Array<*>|Object} collection the collection to get the values from
 * @returns {Array<*>|Object} the original object with the keys passed omitted
 */
export default curry(function omit(keys, collection) {
  const isCollectionObject = isObject(collection);
  const coalescedCollection = isCollectionObject ? collection : coalesceToArray(collection);

  if (coalescedCollection !== collection) {
    return coalescedCollection;
  }

  const paths = getConsolidatedPaths([], keys);

  return isCollectionObject ? omitFromObject(coalescedCollection, paths) : omitFromArray(coalescedCollection, paths);
});
