// methods
import curry from './curry';

// utils
import isFunction from './_utils/isFunction';
import isNAN from './_utils/isNAN';

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
  if (isFunction(Constructor)) {
    /* eslint-disable eqeqeq */
    return value != null && (
    /* eslint-enable */
      value === Constructor ||
      value.constructor === Constructor
    );
  }

  return value === Constructor || isNAN(Constructor) && isNAN(value);
});
