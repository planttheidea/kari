import React, {
  PureComponent
} from 'react';
import {
  render
} from 'react-dom';

import k from '../src';

console.log(k);

const abc = (a, b, c) => {
  return [a, b, c];
};

const curried = k.curry(abc);

console.log('okay', curried(1)(2)(3));
console.log('last', curried(1, 2)(3));
console.log('first', curried(1)(2, 3));
console.log('none', curried(1, 2, 3));

const curriedForEach = k.forEach((item, index, items) => {
  console.log(item, index, items);
}, [1, 2, 3]);

console.log(curriedForEach);

const reduced = k.reduce((sum, num) => {
  return sum + num;
}, [1, 2, 3, 4, 5], 0);

console.log(reduced);

const partitioned = k.partition((item) => {
  return item % 2 === 0;
}, [1, 2, 3, 4, 5, 6]);

console.log(partitioned);

console.log(k.take(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(k.take(5)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(k.rest(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(k.rest(5)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const add = (a, b) => {
  return a + b
};

const square = (c) => {
  return c ** 2
};

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

const array = [
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

console.log(k.get(0)(array));
console.log(k.get('0.some.0.deeply.nested')(array));
console.log(k.get('[0]some[0]deeply.nested')(array));
console.log(k.get([0, 'some', 0, 'deeply', 'nested'])(array));
console.log(k.get([0, 'some', 2, 'deeply', 'nested'])(array));

console.log(k.set(0)('foo')(array));
console.log(k.set('0.some.0.deeply.nested')('thing')(array));
console.log(k.set('[0]some[0]deeply.nested')('thing')(array));
console.log(k.set([0, 'some', 0, 'deeply', 'nested'])('thing')(array));
console.log(k.set([0, 'some', 2, 'deeply', 'nested'])('thing')(array));

console.groupEnd();

const obj = {
  foo: 'foo',
  bar: 'bar',
  baz: 'baz'
};

k.forEach(console.log.bind(console), obj);

console.log(k.filter((value) => {
  return value === 'foo';
}, obj));

const addThreeNumbers = (a, b, c) => {
  return a + b + c;
};

const doIt = k.curry(addThreeNumbers);

console.log(doIt(k.__, 2, k.__)(1)(3));
console.log(doIt(1, k.__, 3)(2));
console.log(doIt(k.__, k.__, 3)(1, 2));
console.log(doIt(k.__)(k.__)(k.__)(1)(k.__, 3)(2));

const divide = k.curry((a, b) => {
  return a / b;
});

console.log(divide(k.__, 4)(2));

console.log(k.modulo(-17, 5));
console.log(k.modulo(17, 5));
console.log(k.modulo(17, -5));
console.log(k.modulo(17, 0));
console.log(k.modulo(17.2, 5));
console.log(k.modulo(17, 5.3));
console.log(k.modulo(17, 5.3, 'foo'));
//
console.log(k.sort((a, b) => {
  return a > b;
})([4, 1, 2, 8, 4]));

const sortByFoo = k.sortBy(k.get('foo'));

console.log(sortByFoo([
  {foo: 'foo'},
  {foo: 'bar'},
  {foo: 'baz'}
]));

const workers = [
  {name: 'Bill', salary: 40000},
  {name: 'Suzy', salary: 40000},
  {name: 'Alex', salary: 50000}
];

const sortBySalaryThenName = k.sortWith([
  k.descend(k.get('salary')),
  k.ascend(k.get('name'))
]);

console.log(sortBySalaryThenName(workers));

const fn = function(foo) {
  console.log(foo);

  return this;
};
const objectToBind = {};

const bound = k.bind(fn)(objectToBind, ['foo']);

console.log(bound() === objectToBind);

const allFive = (a, b, c, d, e) => {
  return [a, b, c, d, e];
};

const onlyTwo = k.arity(2)(allFive);

console.log(onlyTwo('a', 'b', 'c', 'd', 'e'));

const curriedTest = k.curry((a, b, c, d, e) => {
  return [a, b, c, d, e];
});

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













class App extends PureComponent {
  render() {
    return (
      <div className={`example`}>
        <h1>
          App
        </h1>
      </div>
    );
  }
}

const div = document.createElement('div');
const style = document.createElement('style');

style.textContent = `
body {
      margin: 0;
      font-family: 'Helvetica Neue', sans-serif;
    }

    a {
      color: #38afd4;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .banner {
      border: 0;
      position: absolute;
      right: 0;
      top: 0;
    }

    .header {
      background: #fff;
      color: #ec7720;
      font-size: 50px;
      padding: 40px;
    }

    .example {
      padding: 25px;
    }

    .props {
      overflow: auto;
    }

    .component {
      border: 10px solid #38afd4;
      border-radius: 5px;
      height: 300px;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }

    .item {
      background: linear-gradient(#fff, #eee);
      line-height: 30px;
      padding: 0 10px;
    }

    .axis-x .item {
      display: inline-block;
      line-height: 300px;
      padding: 0;
      text-align: center;
      width: 150px;
    }

    .axis-x .component {
      white-space: nowrap;
    }

    .square-item {
      background: linear-gradient(#fff, #eee);
      display: inline-block;
      line-height: 100px;
      text-align: center;
      width: 100px;
    }

    .even {
      background: linear-gradient(#ddd, #ccc);
    }
`;

const renderApp = (container, length = 1000) => {
  render((
    <App length={length}/>
  ), container);
};

// // uncomment to see the list update based on new props
// setInterval(() => {
//   renderApp(div, (Math.random() * 1000));
// }, 5000);

renderApp(div);

document.body.appendChild(div);
document.body.appendChild(style);
