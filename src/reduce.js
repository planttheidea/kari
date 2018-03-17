// methods
import curry from './curry';

// utils
import {reduce} from './_internal/reduce';

/**
 * @function reduce
 *
 * @description
 * reduce the collection to a single value based on fn
 *
 * @param {function(*, *, (number|string), (Array<*>|Object)): *} the method to reduce the collection with
 * @param {Array<*>|Object} collection the collection to reduce
 * @param {*} initialValue the initial value to start the reduction from
 * @returns {*} the reduced value
 */
export default curry(reduce);
