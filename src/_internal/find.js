export function createFindArray(isIndex, isFromLast) {
  function findArray(fn, array) {
    for (let index = 0; index < array.length; index++) {
      if (fn(array[index], index, array)) {
        return isIndex ? index : array[index];
      }
    }

    return isIndex ? -1 : undefined;
  }

  function findArrayLast(fn, array) {
    for (let index = array.length - 1; index >= 0; index--) {
      if (fn(array[index], index, array)) {
        return isIndex ? index : array[index];
      }
    }

    return isIndex ? -1 : undefined;
  }

  return isFromLast ? findArrayLast : findArray;
}

export function createFindObject(isKey, isFromLast) {
  function findObject(fn, object) {
    const keys = Object.keys(object);

    let key;

    for (let index = 0; index < keys.length; index++) {
      key = keys[index];

      if (fn(object[key], key, object)) {
        return isKey ? key : object[key];
      }
    }
  }

  function findObjectLast(fn, object) {
    const keys = Object.keys(object);

    let key;

    for (let index = keys.length - 1; index >= 0; index--) {
      key = keys[index];

      if (fn(object[key], key, object)) {
        return isKey ? key : object[key];
      }
    }
  }

  return isFromLast ? findObjectLast : findObject;
}
