// test
import test from 'ava';

// src
import ascend from 'src/ascend';
import descend from 'src/descend';
import get from 'src/get';
import sortWith from 'src/sortWith';

test('if sortWith will return a new array sorted based on the values returned from the comparators passed (curried)', (t) => {
  const workers = [
    {name: 'Bill', salary: 40000},
    {name: 'Alex', salary: 40000},
    {name: 'Suzy', salary: 50000}
  ];

  const result = sortWith([
    descend(get('salary')),
    ascend(get('name'))
  ])(workers);

  t.not(result, workers);

  t.deepEqual(result, [
    {name: 'Suzy', salary: 50000},
    {name: 'Alex', salary: 40000},
    {name: 'Bill', salary: 40000}
  ]);
});

test('if sortWith will return a new array sorted based on the values returned from the comparators passed (full arity)', (t) => {
  const workers = [
    {name: 'Bill', salary: 40000},
    {name: 'Alex', salary: 40000},
    {name: 'Suzy', salary: 50000}
  ];

  const result = sortWith([
    descend(get('salary')),
    ascend(get('name'))
  ], workers);

  t.not(result, workers);

  t.deepEqual(result, [
    {name: 'Suzy', salary: 50000},
    {name: 'Alex', salary: 40000},
    {name: 'Bill', salary: 40000}
  ]);
});
