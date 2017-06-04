/**
 * @function forEachObject
 *
 * @description
 * iterate over each of the items
 *
 * @param {function(*, (string), (Object)): *} fn the function to iterate over the items
 * @param {Object} object the items to iterate over
 * @returns {Object} the items passed
 */
export default function forEachObject(fn, object) {
  const keys = Object.keys(object);

  let index = -1,
      key;

  while (++index < keys.length) {
    key = keys[index];

    fn(object[key], key, object);
  }

  return object;
}
