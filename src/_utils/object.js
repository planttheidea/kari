// utils
import {
  isArray,
  isNumber,
  isString
} from './is';

const PERIOD = '.';

/**
 * @function getKey
 *
 * @description
 * get the key as a number if parseable
 *
 * @param {string} key the key to try to parse
 * @returns {number|string} the parsed key
 */
export const getKey = (key) => {
  const intKey = +key;

  return `${intKey}` === key ? intKey : key;
};

/**
 * @function getPath
 *
 * @description
 * the path to parsed into a valid array of keys / indices
 *
 * @param {Array<number|string>|number|string} path the path to parse
 * @returns {Array<number|string>} the parsed path
 */
export const getPath = (path) => {
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
};
