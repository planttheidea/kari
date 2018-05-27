// methods
import curry from './curry';
import filter from './filter';

/**
 * @function uniqueBy
 *
 * @description
 * filter down the collection to the unique values based on their return from fn
 *
 * @param {Array<*>|Object} collection the collection to filter
 * @returns {Array<*>|Object} the filtered collection
 */
export default curry(function uniqueBy(fn, collection) {
  const values = [];

  let value;

  return filter((item, key) => {
    value = fn(item, key, collection);

    const doesNotExist = !~values.indexOf(value);

    if (doesNotExist) {
      values.push(value);
    }

    return doesNotExist;
  }, collection);
});
