// external dependencies
import {deepEqual} from 'fast-equals';

// methods
import curry from './curry';

/**
 * @function equals
 *
 * @description
 * are the two objects passed deeply equal to one another
 *
 * @param {any} object1 the first object to compare
 * @param {any} object2 the second object to compare
 * @returns {boolean} are the two objects deeply equal
 */
export default curry(deepEqual, 2);
