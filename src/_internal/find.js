/**
 * @function createFindArray
 *
 * @description
 * create a function that will find the item or the index of the item in the array
 *
 * @param {boolean} isIndex is the search for an index
 * @param {boolean} isFromLast is the search from the end of the array to the beginning
 * @returns {function(any, Array<any>): any} the find function
 */
export function createFindArray(isIndex, isFromLast) {
  function findArray(fn, array) {
    for (let index = 0; index < array.length; index++) {
      if (fn(array[index], index, array)) {
        return isIndex ? index : array[index];
      }
    }

    return isIndex ? -1 : undefined;
  }

  function findArrayLast(fn, array) {
    for (let index = array.length - 1; index >= 0; index--) {
      if (fn(array[index], index, array)) {
        return isIndex ? index : array[index];
      }
    }

    return isIndex ? -1 : undefined;
  }

  return isFromLast ? findArrayLast : findArray;
}
/**
 * @function createFindObject
 *
 * @description
 * create a function that will find the item or the key of the item in the object
 *
 * @param {boolean} isKey is the search for a key
 * @param {boolean} isFromLast is the search from the end of the object to the beginning
 * @returns {function(any, Object): any} the find function
 */
export function createFindObject(isKey, isFromLast) {
  function findObject(fn, object) {
    const keys = Object.keys(object);

    let key;

    for (let index = 0; index < keys.length; index++) {
      key = keys[index];

      if (fn(object[key], key, object)) {
        return isKey ? key : object[key];
      }
    }
  }

  function findObjectLast(fn, object) {
    const keys = Object.keys(object);

    let key;

    for (let index = keys.length - 1; index >= 0; index--) {
      key = keys[index];

      if (fn(object[key], key, object)) {
        return isKey ? key : object[key];
      }
    }
  }

  return isFromLast ? findObjectLast : findObject;
}
