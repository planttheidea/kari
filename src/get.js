// methods
import curry from './curry';

// utils
import getPath from './_utils/getPath';
import isEmpty from './_utils/isEmpty';

/**
 * @function get
 *
 * @description
 * get the value at the path passed in the object
 *
 * @param {(Array<number|string>|number|string)} path the path to get the value with
 * @param {Array<*>|Object} object the object to get the value from
 * @returns {*} the value at the path passed
 */
export default curry(function get(path, object) {
  const cleanPath = getPath(path);

  if (!object || isEmpty(cleanPath)) {
    return;
  }

  const childSource = object[cleanPath[0]];

  return cleanPath.length === 1 ? childSource : get(cleanPath.slice(1), childSource);
});
