// methods
import curry from './curry';

// utils
import getPath from './_utils/getPath';

/**
 * @function hasProperty
 *
 * @description
 * determine if the object has the property
 *
 * @param {string} property the property to find in object
 * @param {*} object the object to check if property exists in
 * @returns {boolean} does the object have the property
 */
function hasProperty(property, object) {
  return object != null && object.hasOwnProperty(property); // eslint-disable-line eqeqeq
}

/**
 * @function hasNestedProperty
 *
 * @description
 * does the value have the nested key structure denoted by path
 *
 * @param {Array<number|string>} path the path to test
 * @param {*} value the value to check for the nested path existence
 * @returns {boolean} does the nested key structure exist in value
 */
function hasNestedProperty(path, value) {
  const key = path.shift();
  const valueHasProperty = hasProperty(key, value);

  if (!path.length) {
    return valueHasProperty;
  }

  return valueHasProperty ? hasNestedProperty(path, value[key]) : false;
}

/**
 * @function has
 *
 * @description
 * does the value contain the keyOrIndex passed
 *
 * @param {number|string} keyOrIndex the key or index that the value may contain
 * @param {*} value the value to test if key is present in
 * @returns {boolean} does value have keyOrIndex
 */
export default curry(function has(keyOrIndex, value) {
  return hasNestedProperty(getPath(keyOrIndex), value);
});
