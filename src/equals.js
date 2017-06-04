// methods
import curry from './curry';

// utils
import isEquivalent from './_utils/isEquivalent';

export default curry(function equals(firstValue, secondValue) {
  return isEquivalent(firstValue, secondValue);
});
