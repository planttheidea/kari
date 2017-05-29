import React, {
  PureComponent
} from 'react';
import {
  render
} from 'react-dom';

import kari from '../src';

console.log(kari);

const abc = (a, b, c) => {
  return [a, b, c];
};

const curried = kari.curry(abc);

console.log(curried(1)(2)(3));
console.log(curried(1, 2)(3));
console.log(curried(1)(2, 3));
console.log(curried(1, 2, 3));

const curriedForEach = kari.forEach((item, index, items) => {
  console.log(item, index, items);
}, [1, 2, 3]);

console.log(curriedForEach);

const reduced = kari.reduce((sum, num) => {
  return sum + num;
}, [1, 2, 3, 4, 5], 0);

console.log(reduced);

const partitioned = kari.partition((item) => {
  return item % 2 === 0;
}, [1, 2, 3, 4, 5, 6]);

console.log(partitioned);

console.log(kari.take(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(kari.take(5)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(kari.rest(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(kari.rest(5)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const add = (a, b) => {
  return a + b
};

const square = (c) => {
  return c ** 2
};

const composeAddSquare = kari.compose(square, add);
const pipeAddSquare = kari.pipe(add, square);

console.log(composeAddSquare(1, 2));
console.log(pipeAddSquare(1, 2));

const prepend = kari.prepend('x');

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

console.log(kari.get('shallow', object));
console.log(kari.get('nested.very.deeply')(object));

console.log(kari.set('shallow', 'bar', object));
console.log(kari.set('nested.very.deeply', 'baz', object));

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

console.log(kari.get(0)(array));
console.log(kari.get('0.some.0.deeply.nested')(array));
console.log(kari.get('[0]some[0]deeply.nested')(array));
console.log(kari.get([0, 'some', 0, 'deeply', 'nested'])(array));
console.log(kari.get([0, 'some', 2, 'deeply', 'nested'])(array));

console.log(kari.set(0)('foo')(array));
console.log(kari.set('0.some.0.deeply.nested')('thing')(array));
console.log(kari.set('[0]some[0]deeply.nested')('thing')(array));
console.log(kari.set([0, 'some', 0, 'deeply', 'nested'])('thing')(array));
console.log(kari.set([0, 'some', 2, 'deeply', 'nested'])('thing')(array));

console.groupEnd();

const obj = {
  foo: 'foo',
  bar: 'bar',
  baz: 'baz'
};

kari.forEach(console.log.bind(console), obj);

console.log(kari.filter((value) => {
  return value === 'foo';
}, obj));














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
