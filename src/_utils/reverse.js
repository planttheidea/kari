// utils
import coalesceToArray from './coalesceToArray';
import isObject from './isObject';

/**
 * @function reverseArray
 *
 * @description
 * immutably reverse the order of an array
 *
 * @param {Array<*>} array the array to reverse
 * @returns {Array<*>} the reversed array
 */
function reverseArray(array) {
  let index = array.length,
      newArray = [];

  while (index--) {
    newArray.push(array[index]);
  }

  return newArray;
}

/**
 * @function reverseObject
 *
 * @description
 * immutably reverse the order of an object
 *
 * @param {Object} object the object to reverse
 * @returns {Object} the reversed object
 */
function reverseObject(object) {
  const keys = Object.keys(object);

  let index = keys.length,
      newObject = {},
      key;

  while (index--) {
    key = keys[index];

    newObject[key] = object[key];
  }

  return newObject;
}

export default function reverse(collection) {
  return isObject(collection) ? reverseObject(collection) : reverseArray(coalesceToArray(collection));
}
