/**
 * @function getKey
 *
 * @description
 * get the key as a number if parseable
 *
 * @param {string} key the key to try to parse
 * @returns {number|string} the parsed key
 */
export default function getKey(key) {
  const intKey = +key;

  return `${intKey}` === key ? intKey : key;
}
