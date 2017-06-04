// utils
import getObjectClass from './getObjectClass';
import isNAN from './isNAN';

/**
 * @constant {RegExp} ITERATOR_COMPARE_REGEXP
 */
const ITERATOR_COMPARE_REGEXP = /(Map|Set)/;

/**
 * @constant {RegExp} OBJECT_OR_ARRAY_COMPARE_REGEXP
 */
const OBJECT_OR_ARRAY_COMPARE_REGEXP = /(Object|Array)/;

/**
 * @constant {RegExp} VALUE_OF_COMPARE_REGEXP
 */
const VALUE_OF_COMPARE_REGEXP = /(Date|Boolean|Number|String)/;

/**
 * @function getArrayFromIterator
 *
 * @description
 * convert an Iterator into an array based on its values
 *
 * @param {Iterator} iterator the iterator to call
 * @returns {Array<*>} the array of values from the iterator
 */
function getArrayFromIterator(iterator) {
  let array = [],
      iteration;

  while ((iteration = iterator.next()) && !iteration.done) {
    array.push(iteration.value);
  }

  return array;
}

/**
 * @function isObjectOrArrayEquivalent
 *
 * @description
 * are the two objects or arrays equal in value, handling circular references
 *
 * @param {*} firstValue the first value to compare
 * @param {*} secondValue the second value to compare
 * @param {Array<*>} firstStack the first stack of objects already compared to support circular objects
 * @param {Array<*>} secondStack the second stack of objects already compared to support circular objects
 * @returns {boolean} are the first and second value equivalent
 */
function isObjectOrArrayEquivalent(firstValue, secondValue, firstStack, secondStack) {
  const firstKeys = Object.keys(firstValue);
  const secondKeys = Object.keys(secondValue);

  if (firstKeys.length !== secondKeys.length) {
    return false;
  }

  let index = -1;

  while (++index < firstStack.length) {
    if (firstStack[index] === firstValue) {
      return secondStack[index] === secondValue;
    }
  }

  firstStack.push(firstValue);
  secondStack.push(secondValue);

  index = -1;

  let key;

  while (++index < firstKeys.length) {
    key = firstKeys[index];

    /* eslint-disable no-use-before-define */
    if (!isEquivalent(firstValue[key], secondValue[key], firstStack, secondStack)) {
    /* eslint-enable */
      return false;
    }
  }

  firstStack.pop();
  secondStack.pop();

  return true;
}

/**
 * @function isEquivalent
 *
 * @description
 * are the two values passed equal in value
 *
 * @param {*} firstValue the first value to compare
 * @param {*} secondValue the second value to compare
 * @param {Array<*>} firstStack the first stack of objects already compared to support circular objects
 * @param {Array<*>} secondStack the second stack of objects already compared to support circular objects
 * @returns {boolean} are the first and second value equivalent
 */
export default function isEquivalent(firstValue, secondValue, firstStack = [], secondStack = []) {
  if (firstValue === secondValue) {
    return true;
  }

  const objectClass = getObjectClass(firstValue);

  if (objectClass !== getObjectClass(secondValue)) {
    return false;
  }

  if (isNAN(firstValue)) {
    return isNAN(secondValue);
  }

  if (VALUE_OF_COMPARE_REGEXP.test(objectClass)) {
    return firstValue.valueOf() === secondValue.valueOf();
  }

  if (objectClass === 'Error') {
    return firstValue.name === secondValue.name && firstValue.message === secondValue.message;
  }

  if (objectClass === 'RegExp') {
    return firstValue.toString() === secondValue.toString();
  }

  if (ITERATOR_COMPARE_REGEXP.test(objectClass)) {
    return isEquivalent(getArrayFromIterator(firstValue.entries()), getArrayFromIterator(secondValue.entries()),
      firstStack, secondStack);
  }

  if (OBJECT_OR_ARRAY_COMPARE_REGEXP.test(objectClass)) {
    return isObjectOrArrayEquivalent(firstValue, secondValue, firstStack, secondStack);
  }

  return false;
}
