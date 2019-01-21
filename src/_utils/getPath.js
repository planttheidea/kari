// utils
import getKey from './getKey';
import isArray from './isArray';
import isString from './isString';

const QUOTES_REGEXP = /['|"|`]/;

/**
 * @function getDotSeparatedPath
 *
 * @description
 * get the path separated by periods as an array of strings or numbers
 *
 * @param {string} path the string path to parse
 * @returns {Array<number|string>} the parsed string path as an array path
 */
function getDotSeparatedPath(path) {
  return path.split('.').reduce((splitPath, pathItem) => !pathItem ? splitPath : [...splitPath, getKey(pathItem)], []);
}

/**
 * @function isQuotedKey
 *
 * @description
 * is the key passed a quoted key
 *
 * @param {string} key the key to test
 * @returns {boolean} is the key a quoted key
 */
function isQuotedKey(key) {
  return QUOTES_REGEXP.test(key[0]) && key[0] === key[key.length - 1];
}

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

  if (isString(path)) {
    return path.split(/\[(.*?)\]/g).reduce((cleanPath, pathItem) => {
      if (!pathItem) {
        return cleanPath;
      }

      if (isQuotedKey(pathItem)) {
        return [...cleanPath, getKey(pathItem.slice(1, -1))];
      }

      return [...cleanPath, ...getDotSeparatedPath(pathItem)];
    }, []);
  }

  return [path];
}
