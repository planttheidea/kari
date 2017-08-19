// methods
import curry from './curry';

// utils
import getPath from './_utils/getPath';
import isArray from './_utils/isArray';
import isEmpty from './_utils/isEmpty';
import isNumber from './_utils/isNumber';
import isObject from './_utils/isObject';

/**
 * @function set
 *
 * @description
 * create a new collection based on the original, deeply setting the value
 *
 * @param {Array<number|string>|number|string} path the path to deeply assign to
 * @param {*} value the value to assign
 * @param {Array<*>|Object} collection the collection to deeply assign to
 * @returns {Array<*>|Object} the collection clone, with the value deeply assigned
 */
function set(path, value, collection) {
  const cleanPath = getPath(path);

  if (isEmpty(cleanPath)) {
    return collection;
  }

  let destination = isArray(collection) ? [...collection] : {...collection};

  if (cleanPath.length === 1) {
    destination[cleanPath[0]] = value;

    return destination;
  }

  const childPath = cleanPath[0];
  const childSource = collection[childPath];
  const descentantSource =
    isArray(childSource) || isObject(childSource) ? childSource : isNumber(cleanPath[1]) ? [] : {};

  destination[childPath] = set(cleanPath.slice(1), value, descentantSource);

  return destination;
}

export default curry(set);
