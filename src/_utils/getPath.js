// utils
import getKey from './getKey';
import isArray from './isArray';
import isNumber from './isNumber';
import isString from './isString';

const PERIOD = '.';

/**
 * @function getPath
 *
 * @description
 * the path to parsed into a valid array of keys / indices
 *
 * @param {Array<number|string>|number|string} path the path to parse
 * @returns {Array<number|string>} the parsed path
 */
export default function getPath(path) {
  if (isArray(path)) {
    return path;
  }

  if (isNumber(path)) {
    return [path];
  }

  if (isString(path)) {
    let cleanPath = path
      .replace(/\[(\w+)\]/g, '.$1.')
      .replace(/(\.){2,}/g, '.');

    if (cleanPath[0] === PERIOD) {
      cleanPath = cleanPath.slice(1);
    }

    if (cleanPath.slice(-1) === PERIOD) {
      cleanPath = cleanPath.slice(0, -1);
    }

    return cleanPath
      .split(PERIOD)
      .map(getKey);
  }
}
