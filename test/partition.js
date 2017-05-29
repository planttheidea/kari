// test
import test from 'ava';

// src
import partition from 'src/partition';

test('if partition will split the array based on truthy / falsy returns from the method (curried)', (t) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  const createMethod = (comparator) => {
    return (num) => {
      return num % 2 === comparator;
    };
  };

  const result = partition(createMethod(0))(items);

  const truthyResults = items.filter(createMethod(0));
  const falsyResults = items.filter(createMethod(1));

  t.deepEqual(result, [
    truthyResults,
    falsyResults
  ]);
});

test('if partition will split the array based on truthy / falsy returns from the method (full arity)', (t) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  const createMethod = (comparator) => {
    return (num) => {
      return num % 2 === comparator;
    };
  };

  const result = partition(createMethod(0), items);

  const truthyResults = items.filter(createMethod(0));
  const falsyResults = items.filter(createMethod(1));

  t.deepEqual(result, [
    truthyResults,
    falsyResults
  ]);
});

test('if partition does the same for objects as it does for arrays', (t) => {
  const getKeyMappedValues = (array) => {
    return array.reduce((allItems, value) => {
      allItems[value] = value;

      return allItems;
    }, {});
  };

  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  const mappedItems = getKeyMappedValues(items);
  const createMethod = (comparator) => {
    return (num) => {
      return num % 2 === comparator;
    };
  };

  const result = partition(createMethod(0), mappedItems);

  const truthyResults = getKeyMappedValues(items.filter(createMethod(0)));
  const falsyResults = getKeyMappedValues(items.filter(createMethod(1)));

  t.deepEqual(result, {
    falsy: falsyResults,
    truthy: truthyResults
  });
});

test('if partition returns the items passed if not an object or array', (t) => {
  const items = 'foo';

  const result = partition(() => {}, items);

  t.is(result, items);
});
