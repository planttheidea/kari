/**
 * @function reverseArray
 *
 * @description
 * immutably reverse the order of an array
 *
 * @param {Array<*>} array the array to reverse
 * @returns {Array<*>} the reversed array
 */
export default function reverseArray(array) {
  let index = array.length,
      newArray = [];

  while (index--) {
    newArray.push(array[index]);
  }

  return newArray;
}
