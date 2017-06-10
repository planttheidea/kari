// methods
import curry from './curry';

// utils
import coalesceToArray from './_utils/coalesceToArray';
import getPath from './_utils/getPath';
import isObject from './_utils/isObject';

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
  const {
    [key]: keyIgnored,
    ...newObject
  } = object;

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

  let newArray = [],
      indexToRemove = indices.shift(),
      index = -1;

  while (++index < array.length) {
    if (index === indexToRemove) {
      indexToRemove = indices.shift();

      continue;
    }

    newArray.push(array[index]);
  }

  return newArray;
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
  const key = path.shift();
  const hasKey = collection != null && collection.hasOwnProperty(key); // eslint-disable-line eqeqeq
  const cleanCollection = getCleanCollection(collection, isCollectionObject);

  if (!hasKey) {
    return collection;
  }

  if (!path.length) {
    if (isCollectionObject) {
      return removeKeyFromObject(key, cleanCollection);
    }

    return removeIndicesFromArray([key], cleanCollection);
  }

  /* eslint-disable no-use-before-define */
  let omitMethod = isObject(cleanCollection[key]) ? omitFromObject : omitFromArray;
  /* eslint-enable */

  collection[key] = omitMethod([path], cleanCollection[key]);

  return collection;
}

/**
 * @function omitFromArray
 *
 * @description
 * remove the items at the keys location from the array
 *
 * @param {Array<string>} keys the keys to remove
 * @param {Array<*>} array the array to remove the keys from
 * @returns {Array<*>} the omitted array
 */
function omitFromArray(keys, array) {
  let index = -1,
      newCollection = array,
      indicesToRemove = [],
      path;

  while (++index < keys.length) {
    path = getPath(keys[index]);

    if (path.length > 1) {
      newCollection = omitNested(path, newCollection, true);
    } else {
      indicesToRemove.push(path[0]);
    }
  }

  return removeIndicesFromArray(indicesToRemove, newCollection);
}

/**
 * @function omitFromObject
 *
 * @description
 * remove the items at the keys location from the object
 *
 * @param {Array<string>} keys the keys to remove
 * @param {Object} object the object to remove the keys from
 * @returns {Object} the omitted object
 */
function omitFromObject(keys, object) {
  let index = -1,
      newCollection = object;

  while (++index < keys.length) {
    newCollection = omitNested(getPath(keys[index]), newCollection, true);
  }

  return newCollection;
}

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
  const cleanKeys = [...keys];

  /**
   * @todo
   *
   * group keys into their hierarchical levels to ensure that nested array indices don't change
   * between omittances
   */

  if (coalescedCollection !== collection) {
    return coalescedCollection;
  }

  return isCollectionObject ? omitFromObject(cleanKeys, coalescedCollection) :
    omitFromArray(cleanKeys, coalescedCollection);
});
