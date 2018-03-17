// methods
import curry from './curry';
import some from './some';

// utils
import {createFindArray, createFindObject} from './_internal/find';
import {isEqual} from './_internal/is';

export const findArray = createFindArray(false, false);
export const findObject = createFindObject(false, false);

export default curry(function includes(entry, object) {
  return typeof object === 'string' ? !!~object.indexOf(entry) : some(isEqual(entry), object);
});
