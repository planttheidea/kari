// methods
import curry from './curry';
import some from './some';

// utils
import {isEqual} from './_internal/is';

/**
 * @function includes
 *
 * @description
 * does the collection include the entry
 *
 * @param {any} entry the entry to find in the collection
 * @param {Array<any>|Object|string} collection the collection to find the entry in
 * @returns {boolean} does the collection include the entry
 */
export default curry(function includes(entry, collection) {
  return typeof collection === 'string' ? !!~collection.indexOf(entry) : some(isEqual(entry), collection);
});
