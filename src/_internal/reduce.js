// utils
import {getNormalizedResult} from './normalize';

/**
 * @function reduceArray
 *
 * @description
 * reduce the array values to a single result
 *
 * @param {function} fn the function to reduce with
 * @param {any} initialValue the initial value of the reduction
 * @param {Array<any>} array the array to reduce from
 * @returns {any} the reduced value
 */
export function reduceArray(fn, initialValue, array) {
  let value = initialValue;

  if (initialValue === void 0) {
    value = array.shift();
  }

  for (let index = 0; index < array.length; index++) {
    value = fn(value, array[index], index, array);
  }

  return value;
}

/**
 * @function reduceArray
 *
 * @description
 * reduce the array values to a single result starting from the end of the array and iterating forward
 *
 * @param {function} fn the function to reduce with
 * @param {any} initialValue the initial value of the reduction
 * @param {Array<any>} array the array to reduce from
 * @returns {any} the reduced value
 */
export function reduceRightArray(fn, initialValue, array) {
  let value = initialValue;

  if (initialValue === void 0) {
    value = array.pop();
  }

  for (let index = array.length - 1; index >= 0; index--) {
    value = fn(value, array[index], index, array);
  }

  return value;
}

/**
 * @function reduceObject
 *
 * @description
 * reduce the object values to a single result
 *
 * @param {function} fn the function to reduce with
 * @param {any} initialValue the initial value of the reduction
 * @param {Object} object the object to reduce from
 * @returns {any} the reduced value
 */
export function reduceObject(fn, initialValue, object) {
  let keys = Object.keys(object),
      value = initialValue,
      key;

  if (typeof initialValue === 'undefined') {
    key = keys.shift();
    value = object[key];
  }

  for (let index = 0; index < keys.length; index++) {
    key = keys[index];

    value = fn(value, object[key], key, object);
  }

  return value;
}

/**
 * @function reduceRightObject
 *
 * @description
 * reduce the object values to a single result starting from the end of the object and iterating forward
 *
 * @param {function} fn the function to reduce with
 * @param {any} initialValue the initial value of the reduction
 * @param {Object} object the object to reduce from
 * @returns {any} the reduced value
 */
export function reduceRightObject(fn, initialValue, object) {
  let keys = Object.keys(object),
      value = initialValue,
      key;

  if (initialValue === void 0) {
    key = keys.pop();
    value = object[key];
  }

  for (let index = keys.length - 1; index >= 0; index--) {
    key = keys[index];

    value = fn(value, object[key], key, object);
  }

  return value;
}

/**
 * @function reduce
 *
 * @description
 * reduce the collection values to a single result
 *
 * @param {function} fn the function to reduce with
 * @param {any} initialValue the initial value of the reduction
 * @param {Array<any>|Object} collection the collection to reduce from
 * @returns {any} the reduced value
 */
export function reduce(fn, initialValue, collection) {
  return getNormalizedResult(
    collection,
    (normalized) => reduceArray(fn, initialValue, normalized),
    (normalized) => reduceObject(fn, initialValue, normalized)
  );
}

/**
 * @function reduceRight
 *
 * @description
 * reduce the collection values to a single result starting from the end of the collection and iterating forward
 *
 * @param {function} fn the function to reduce with
 * @param {any} initialValue the initial value of the reduction
 * @param {Array<any>|Object} collection the collection to reduce from
 * @returns {any} the reduced value
 */
export function reduceRight(fn, initialValue, collection) {
  return getNormalizedResult(
    collection,
    (normalized) => reduceRightArray(fn, initialValue, normalized),
    (normalized) => reduceRightObject(fn, initialValue, normalized)
  );
}
