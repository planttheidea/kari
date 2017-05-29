// methods
import curry from './curry';

// utils
import {
  isArray,
  isNumber,
  isObject,
  isEmpty
} from './_utils/is';
import {
  getPath
} from './_utils/object';

/**
 * @function set
 *
 * @description
 * create a new object based on the original, deeply setting the value
 *
 * @param {Array<number|string>|number|string} path the path to deeply assign to
 * @param {*} value the value to assign
 * @param {Array<*>|Object} object the object to deeply assign to
 * @returns {Array<*>|Object} the object clone, with the value deeply assigned
 */
function set(path, value, object) {
  const cleanPath = getPath(path);

  if (isEmpty(cleanPath)) {
    return object;
  }

  let destination = isArray(object) ? [...object] : {...object};

  if (cleanPath.length === 1) {
    destination[cleanPath[0]] = value;

    return destination;
  }

  const childPath = cleanPath[0];
  const childSource = object[childPath];
  const descentantSource = isArray(childSource) || isObject(childSource) ? childSource :
    isNumber(cleanPath[1]) ? [] : {};

  destination[childPath] = set(cleanPath.slice(1), value, descentantSource);

  return destination;
}

export default curry(set);
