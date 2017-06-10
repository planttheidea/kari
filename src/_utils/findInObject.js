/**
 * @function findInObject
 *
 * @description
 * find either the key or the item itself in the array
 *
 * @param {function} fn the function to determine the match
 * @param {Object} object the object to search
 * @param {Array<string>} keys the keys to iterate over
 * @param {boolean} isKey should the key be returned instead of the item
 * @returns {*} the item or key returned
 */
export default function findInObject(fn, object, keys, isKey) {
  let index = -1,
      key;

  while (++index < keys.length) {
    key = keys[index];

    if (fn(object[key], key, object)) {
      return isKey ? key : object[key];
    }
  }
}
