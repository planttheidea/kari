// methods
import curry from './curry';

// utils
import {isComplexObject} from './_internal/is';
import {reduce} from './_internal/reduce';

/**
 * @function pick
 *
 * @description
 * pick specific keys from the object passed
 *
 * @param {Array<number|string>} keys the keys to pick from the object
 * @param {Array<*>|Object} collection the object to pick the keys from
 * @returns {Array<*>|Object} the object with specific keys picked
 */
export default curry(function pick(keys, collection) {
  return Array.isArray(collection)
    ? reduce(
      function(newArray, value, index) {
        if (~keys.indexOf(index)) {
          newArray.push(value);
        }

        return newArray;
      },
      [],
      collection
    )
    : isComplexObject(collection)
      ? reduce(
        function pickObject(newObject, key) {
          if (collection.hasOwnProperty(key)) {
            newObject[key] = collection[key];
          }

          return newObject;
        },
        {},
        keys
      )
      : {};
});
