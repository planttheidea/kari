import React, {PureComponent} from 'react';
import {render} from 'react-dom';

import * as k from '../src';
import * as R from 'ramda';

document.body.style.backgroundColor = '#1d1d1d';
document.body.style.color = '#d5d5d5';
document.body.style.margin = 0;
document.body.style.padding = 0;

const div = document.createElement('div');

div.textContent = 'Check the console for details.';

document.body.appendChild(div);

const array = new Array(1000).fill(1).map((ignored, index) => ~~(Math.random() * index));

const filterFn = (ignored, index) => index % 7 === 0;

console.log(k.filter(filterFn)(array));
console.log(k.filter(filterFn, array));

console.log(k.gte(10)(5));
console.log(k.gte(10, 5));

const abc = (a, b, c) => [a, b, c];

const curried = k.curry(abc);

console.log('okay', curried(1)(2)(3));
console.log('last', curried(1, 2)(3));
console.log('first', curried(1)(2, 3));
console.log('none', curried(1, 2, 3));

const curriedForEach = k.forEach(
  (item, index, items) => {
    console.log(item, index, items);
  },
  [1, 2, 3]
);

console.log(curriedForEach);

const reduced = k.reduce(
  (sum, num) => sum + num,
  [1, 2, 3, 4, 5],
  0
);

console.log(reduced);

const partitioned = k.partition(
  (item) => item % 2 === 0,
  [1, 2, 3, 4, 5, 6]
);

console.log(partitioned);

console.log(k.take(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(k.take(5)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(k.rest(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(k.rest(5)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const add = (a, b) => a + b;

const square = (c) => c ** 2;

const composeAddSquare = k.compose(square, add);
const pipeAddSquare = k.pipe(add, square);

console.log(composeAddSquare(1, 2));
console.log(pipeAddSquare(1, 2));

const prepend = k.prepend('x');

console.log(prepend([1, 2, 3]));

const object = {
  shallow: 'foo',
  nested: {
    very: {
      deeply: 'bar'
    }
  }
};

console.group('object');

console.log(k.get('shallow', object));
console.log(k.get('nested.very.deeply')(object));

console.log(k.set('shallow', 'bar', object));
console.log(k.set('nested.very.deeply', 'baz', object));

console.groupEnd();

const nestedArray = [
  {
    some: [
      {
        deeply: {
          nested: 'value'
        }
      }
    ]
  }
];

console.group('array');

console.log(k.get(0)(nestedArray));
console.log(k.get('0.some.0.deeply.nested')(nestedArray));
console.log(k.get('[0]some[0]deeply.nested')(nestedArray));
console.log(k.get([0, 'some', 0, 'deeply', 'nested'])(nestedArray));
console.log(k.get([0, 'some', 2, 'deeply', 'nested'])(nestedArray));

console.log(k.set(0)('foo')(nestedArray));
console.log(k.set('0.some.0.deeply.nested')('thing')(nestedArray));
console.log(k.set('[0]some[0]deeply.nested')('thing')(nestedArray));
console.log(k.set([0, 'some', 0, 'deeply', 'nested'])('thing')(nestedArray));
console.log(k.set([0, 'some', 2, 'deeply', 'nested'])('thing')(nestedArray));

console.groupEnd();

const obj = {
  foo: 'foo',
  bar: 'bar',
  baz: 'baz'
};

k.forEach(console.log.bind(console), obj);

console.log(
  k.filter((value) => value === 'foo', obj)
);

const addThreeNumbers = (a, b, c) => a + b + c;

const doIt = k.curry(addThreeNumbers);

console.log(doIt(k.__, 2, k.__)(1)(3));
console.log(doIt(1, k.__, 3)(2));
console.log(doIt(k.__, k.__, 3)(1, 2));
console.log(doIt(k.__)(k.__)(k.__)(1)(k.__, 3)(2));

const divide = k.curry((a, b) => a / b);

console.log(divide(k.__, 4)(2));

console.log(k.modulo(-17, 5));
console.log(k.modulo(17, 5));
console.log(k.modulo(17, -5));
console.log(k.modulo(17, 0));
console.log(k.modulo(17.2, 5));
console.log(k.modulo(17, 5.3));
console.log(k.modulo(17, 5.3, 'foo'));
//
console.log(
  k.sort((a, b) => a > b)([4, 1, 2, 8, 4])
);

const sortByFoo = k.sortBy(k.get('foo'));

console.log(sortByFoo([{foo: 'foo'}, {foo: 'bar'}, {foo: 'baz'}]));

const workers = [{name: 'Bill', salary: 40000}, {name: 'Suzy', salary: 40000}, {name: 'Alex', salary: 50000}];

const sortBySalaryThenName = k.sortWith([k.descend(k.get('salary')), k.ascend(k.get('name'))]);

console.log(sortBySalaryThenName(workers));

const fn = function(foo) {
  console.log(foo);

  return this;
};
const objectToBind = {};

const bound = k.bind(fn)(objectToBind, ['foo']);

console.log(bound() === objectToBind);

const allFive = (a, b, c, d, e) => [a, b, c, d, e];

const onlyTwo = k.arity(2)(allFive);

console.log(onlyTwo('a', 'b', 'c', 'd', 'e'));

const curriedTest = k.curry((a, b, c, d, e) => [a, b, c, d, e]);

console.log(curriedTest(1, 2, 3, 4, 5));

const uncurried = k.uncurry(5)(curriedTest);

console.log(uncurried(1, 2, 3, 4, 5));

console.log(k.endsWith('o')('foo'));
console.log(k.endsWith('f')('foo'));
console.log(k.startsWith('o')('foo'));
console.log(k.startsWith('f')('foo'));

console.log(k.is(null)(null));
console.log(k.is(undefined)(undefined));
console.log(k.is(NaN)(NaN));
console.log(k.is(String)(''));
console.log(k.is(Number)(10));

console.log(k.equals({foo: 'bar'}, {foo: 'bar'}));

const testExact = {foo: 'bar'};

console.log(k.is(testExact, testExact));

const log = k.tap(k.bind(console.log, console));

const result = k.map(k.compose(square, log))([1, 2, 3]);

const catchFn = (error, ...args) => ({
  args,
  error
});

const tryCatchResult = k.tryCatch(JSON.parse, catchFn)({foo: 'bar'});

console.log(tryCatchResult);

console.log(k.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]));
console.log(
  k.flatten({
    one: 1,
    two: 2,
    threeAndFour: {
      three: 3,
      four: 4
    },
    five: 5,
    sixThroughTwelve: {
      six: 6,
      sevenThroughTwelve: {
        seven: 7,
        eight: 8,
        nineThroughTwelve: {
          nine: 9,
          tenAndEleven: {
            ten: 10,
            eleven: 11
          },
          twelve: 12
        }
      }
    }
  })
);

console.log(k.not('foo'));
console.log(
  k.notBy((value) => value !== 'foo')('foo')
);

console.log(k.equals({foo: 'foo'})({foo: 'bar'}));
console.log(
  k.equalsBy((value, key) => key)({foo: 'foo'})({foo: 'bar'})
);

console.log(k.empty(['foo', 'bar']));
console.log(k.empty({foo: 'bar'}));
console.log(k.empty('foo'));
console.log(k.empty(123));

console.log(k.entries(['foo', 'bar']));
console.log(k.entries({foo: 'bar', bar: 'baz'}));

console.log(
  k.reject((value) => value % 2 === 0)([1, 2, 3, 4, 5])
);
console.log(
  k.filter((value) => value % 2 === 0)([1, 2, 3, 4, 5])
);

console.log(k.unique([1, 2, 2, 1, 1, 2, 2, 1, 3]));
console.log(
  k.uniqueBy((value) => 3)([1, 2, 2, 1, 1, 2, 2, 1, 3])
);
