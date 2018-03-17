// methods
import curry from './curry';

// utils
import {isNaN} from './_internal/is';

/**
 * @function is
 *
 * @description
 * is the value an instance of the constructor passed, or if undefined / null is it equal
 *
 * @param {function|null|undefined} Constructor constructor function to test value against
 * @param {*} value the value to test
 * @returns {boolean} is the value an instance of the Constructor
 */
export default curry(function is(Constructor, value) {
  return (
    value === Constructor ||
    (value != null && typeof value.constructor === 'function' && value.constructor === Constructor) || // eslint-disable-line eqeqeq
    (isNaN(Constructor) && isNaN(value))
  );
});
