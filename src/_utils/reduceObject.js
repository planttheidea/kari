/**
 * @function reduceObject
 *
 * @description
 * reduce the object to a value based on the returns of the call with fn
 *
 * @param {function(*, string, Object): *} fn the method to map with
 * @param {Object} object the object of items to map
 * @param {*} value the initial value of the reduction
 * @param {Array<string>} keys the keys of the object
 * @returns {Object} the reduced object
 */
export default function reduceObject(fn, object, value, keys) {
  let index = -1,
      key;

  if (value === void 0) {
    value = object[keys[0]];
    keys = keys.slice(1);
  }

  while (++index < keys.length) {
    key = keys[index];

    value = fn(value, object[key], key, object);
  }

  return value;
}
