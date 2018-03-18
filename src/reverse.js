// utils
import {getNormalizedResult} from './_internal/normalize';

/**
 * @function reverse
 *
 * @description
 * reverse the order of the collection passed
 *
 * @param {Array<any>|Object} collection the collection to reverse
 * @returns {Array<any>|Object} the reversed collection
 */
export default function reverse(collection) {
  return typeof collection === 'string'
    ? collection
      .split('')
      .reverse()
      .join('')
    : getNormalizedResult(
      collection,
      (normalized) => normalized.slice(0).reverse(),
      (normalized) => {
        const keys = Object.keys(normalized);

        let newObject = {},
            key;

        for (let index = keys.length - 1; index >= 0; index--) {
          key = keys[index];

          newObject[key] = normalized[key];
        }

        return newObject;
      }
    );
}
