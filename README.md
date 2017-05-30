# kari

A tiny, modular, functional library to make all your collections curriable.

### Table of contents
* [Installation](#installation)
* [Usage](#usage)
  * [All modules](#all-modules)
  * [Specific module](#sopecific-module)
* [Difference with other functional libraries](#difference-with-other-functional-libraries)
* [API](#api)
  * [append](#append)
  * [compose](#compose)
  * [curry](#curry)
  * [every](#every)
  * [filter](#filter)
  * [find](#find)
  * [findIndex](#findIndex)
  * [forEach](#forEach)
  * [get](#get)
  * [insert](#insert)
  * [map](#map)
  * [omit](#omit)
  * [partial](#partial)
  * [partition](#partition)
  * [pick](#pick)
  * [pipe](#pipe)
  * [pluck](#pluck)
  * [prepend](#prepend)
  * [reduce](#reduce)
  * [reduceRight](#reduceRight)
  * [rest](#rest)
  * [set](#set)
  * [some](#some)
  * [take](#take)
* [Development](#development)

### Installation

```
$ npm i kari --save
```

### Usage

#### All modules

```javascript
import k from 'kari';

const createValueMap = k.map((value, index) => {
  return {
    [index]: value
  };
});

console.log(createValueMap(['foo', 'bar']));
// [{0: 'foo', 1: 'bar'}]
```

#### Specific module

```javascript
import set from 'kari/set';

let state = {};

const setFooInState = set('foo');

state = setFooInState('bar', state);

console.log(state);
// {foo: 'bar'}
```

### Difference with other functional libraries

There are some really killer libraries out there, namely `ramda` and `lodash/fp`, and both were used as inspiration when building this library. The goal with `kari` is to keep the footprint as small as possible while providing a fast and fairly comprehensive collection of utility methods. `kari` is still quite young, and we are looking to make the API more comprehensive, so PRs are welcome!

### API

#### append

`append(newItems: (any|Array<any>), array: Array<any>): Array<any>`

Adds the new item(s) to the end of `array`.

```javascript
const appended = k.append('baz')(['foo', 'bar']);

console.log(appended); // ['foo', 'bar', 'baz']
```

#### compose

`compose(...fns: Array<function>): function`

Composes the functions passed from right to left into a single function stream.

```javascript
const add = (a, b) => {
  return a + b;
};

const square = (c) => {
  return c ** 2;
};

const composed = k.compose(square, add);

console.log(composed(1, 2)); // 9
```

#### curry

`curry(fn: function, arity: number = fn.length): function`

Makes any method curriable based on the arity passed or determined based on function definition.

```javascript
const add = (a, b) => {
  return a + b;
};

const curried = k.curry(add);

console.log(curried(1)(2))); // 3
```

The curried method accepts any combination of arguments until arity is reached, and placeholders can also be used with the alias `__`.

```javascript
const add = (a, b, c) => {
  return a + b + c;
};

const curriedAdd = k.curry(add);

console.log(curriedAdd(1)(2)(3)); // 9
console.log(curriedAdd(1, 2)(3)); // 9
console.log(curriedAdd(1)(2, 3)); // 9
console.log(curriedAdd(1, 2, 3)); // 9

const divide = (a, b) => {
  return a / b;
};

const curriedDivide = k.curry(divide);

console.log(curriedDivide(k.__, 4)(2))); // 2
```

#### every

`every(fn: function, collection: (Array<any>|Object)): boolean`

Does every iteration of `collection` return truthy when applied via `fn`.

```javascript
const isPositive = (value, keyOrIndex, collection) => {
  return value > 0;
};

const arrayResult = k.every(isPositive)([1, 2, 3]);

console.log(arrayResult); // true

const objectResult = k.every(isPositive)({
  one: 1,
  two: 2,
  three: 3
});

console.log(objectResult); // true
```

#### filter

`filter(fn: function, collection: (Array<any>|Object)): (Array<any>|Object)`

Filter down the `collection` passed based on returning truthy from `fn`.

```javascript
const isEven = (value, keyOrIndex, collection) => {
  return value % 2 === 0;
};

const arrayResult = k.filter(isEven)([1, 2, 3]);

console.log(arrayResult); // [2]

const objectResult = k.filter(isEven)({
  zero: 0,
  one: 1,
  two: 2
});

console.log(objectResult); // {zero: 0, two: 2}
```

#### find

`find(fn: function, collection: (Array<any>|Object)): any`

Find the first item in `collection` that matches `fn`.

```javascript
const isPositive = (value, keyOrIndex, collection) => {
  return value > 1;
};

const arrayResult = k.find(isPositive)([1, 2, 3]);

console.log(arrayResult); // 2

const objectResult = k.find(isPositive)({
  zero: 0,
  one: 1,
  two: 2
});

console.log(objectResult); // 2
```

#### findIndex

`findIndex(fn: function, collection: (Array<any>|Object)): any`

Find the first item in `collection` that matches `fn`.

```javascript
const isPositive = (value, keyOrIndex, collection) => {
  return value > 1;
};

const arrayResult = k.findIndex(isPositive)([1, 2, 3]);

console.log(arrayResult); // 1

const objectResult = k.findIndex(isPositive)({
  zero: 0,
  one: 1,
  two: 2
});

console.log(objectResult); // 1
```

#### forEach

`forEach(fn: function, collection: (Array<any>|Object)): any`

Iterate over `collection` calling `fn`. Returns `collection` for chainability.

```javascript
const isPositive = (value, keyOrIndex, collection) => {
  console.log({
    collection,
    keyOrIndex,
    value
  });
};

const arrayResult = k.forEach(isPositive)([1, 2, 3]);

console.log(arrayResult); // [1, 2, 3]

const objectResult = k.forEach(isPositive)({
  zero: 0,
  one: 1,
  two: 2
});

console.log(objectResult); // {zero: 0, one: 1, two: 2}
```

#### get

`get(path: (Array<number|string>|number|string), collection: (Array<any>|Object)): any`

Get the value stored in `collection` at the given `path`.

```javascript
const object = {
  some: [
    {
      deeply: {
        nested: [
          'value'
        ]
      }
    }
  ]
};

const newObject = k.get('some[0].deeply.nested[0]')(object);

console.log(newObject); // value
```

#### insert

`insert(index: number, newItems: (Array<any>|any), array: Array<any>): Array<any>`

Insert `newItems` into `array` at the provided `index`.

```javascript
const newArray = k.insert(2)('x')([1, 2, 3]);

console.log(newArray); // [1, 2, 'x', 3]
```

#### map

`map(fn: function, collection: (Array<any>|Object)): (Array<any>|Object)`

Map the `collection` passed based on return values from `fn`.

```javascript
const squareAll = (value, keyOrIndex, collection) => {
  return value ** 2;
};

const arrayResult = k.map(squareAll)([1, 2, 3]);

console.log(arrayResult); // [1, 4, 9]

const objectResult = k.map(squareAll)({
  one: 1,
  two: 2,
  three: 3
});

console.log(objectResult); // {one: 1, two: 4, three: 9}
```

#### omit

`omit(keys: Array<number|string>, collection: (Array<any>|Object)): (Array<any>|Object)`

Create a new object with the same values as `collection` but with the `keys` removed.

```javascript
const arrayResult = k.omit([1])(['foo', 'bar', 'baz']);

console.log(arrayResult); // ['foo', 'baz']

const objectResult = k.omit(['foo', 'baz'])({foo: 0, bar: 1, baz: 2});

console.log(objectResult); // {bar: 1}
```

#### partial

`partial(fn: function, ...partialArgs: Array<any>): function(...restOfArgs): any`

Create a partial function that will call `fn` with both `partialArgs` and `restOfArgs`.

```javascript
const add = (a, b, c) => {
  return a + b;
};

const partialFn = k.partial(add, 1, 2);

console.log(partialFn(3)); // g
```

#### partition

`partition(fn: function, collection: (Array<any>|Object)): (Array<Array<any>>|Object)`

Create a collection of collections, split into falsy and truthy collections, based on iterations of `collection` calling `fn`. In the case of arrays, the first collection is truthy, and the second is falsy.

```javascript
const isEven = (value, keyOrIndex, collection) => {
  return value % 2 === 0;
};

const arrayResult = k.partition(isEven)([0, 1, 2, 3]);

console.log(arrayResult); // [[0, 2], [1, 3]]

const objectResult = k.partition(isEven)({
  zero: 0,
  one: 1,
  two: 2,
  three: 3
});

console.log(objectResult); // {truthy: {zero: 0, two: 2}, falsy: {one: 1, three: 3}}
```

#### pick

`pick(keys: Array<number|string>, collection: (Array<any>|Object)): (Array<any>|Object)`

Create a new object with the same values as `collection` but only with the `keys` passed.

```javascript
const arrayResult = k.pick([1])(['foo', 'bar', 'baz']);

console.log(arrayResult); // ['bar']

const objectResult = k.pick(['foo', 'baz'])({foo: 0, bar: 1, baz: 2});

console.log(objectResult); // {foo: 0, baz: 2}
```

#### pipe

`pipe(...fns: Array<function>): function`

Composes the functions passed from left to right into a single function stream. The only difference between this method and `compose` is the order of operations for the `fns` passed.

```javascript
const add = (a, b) => {
  return a + b;
};

const square = (c) => {
  return c ** 2;
};

const piped = k.pipe(add, square);

console.log(piped(1, 2)); // 9
```

#### pluck

`pluck(key: string, array: Array<Object>): Array<any>`

Plucks the values at `key` inside of each object in `array` and builds a new array from them.

```javascript
const values = k.pluck('foo')([{foo: 'foo'}, {bar: 'bar'}, {foo: 'baz'}]);

console.log(values); // ['foo', 'baz']
```

#### prepend

`prepend(newItems: (any|Array<any>), array: Array<any>): Array<any>`

Adds the new item(s) to the beginning of `array`.

```javascript
const prepended = k.prepend('baz')(['foo', 'bar']);

console.log(prepended); // ['baz', 'foo', 'bar']
```

#### reduce

`reduce(fn: function, collection: (Array<any>|Object), initialValue: ?any): (Array<any>|Object)`

Applies `fn` to calculate a new value based on each iteration, starting with `initialValue`. If no `initialValue` is provided, the first value in `collection` is used.

```javascript
const sum = (accumulator, value, keyOrIndex, collection) => {
  return accumulator + value;
};

const arrayResult = k.reduce(sum)([1, 2, 3])(0);

console.log(arrayResult); // 6

const objectResult = k.reduce(sum)({one: 1, two: 2, three: 3})(0);

console.log(objectResult); // 6
```

#### reduceRight

`reduceRight(fn: function, collection: (Array<any>|Object), initialValue: ?any): (Array<any>|Object)`

Applies `fn` to calculate a new value based on each iteration, starting with `initialValue` from the end of `collection` and working to the front. If no `initialValue` is provided, the last value in `collection` is used.

```javascript
const difference = (accumulator, value, keyOrIndex, collection) => {
  return accumulator - value;
};

const arrayResult = k.reduce(difference)([1, 2, 3])(6);

console.log(arrayResult); // 0

const objectResult = k.reduce(difference)({one: 1, two: 2, three: 3})(6);

console.log(objectResult); // 0
```

#### rest

`rest(size: number, array: Array<any>): Array<any>`

Takes the final *n* number of items from `array`, where *n* is `size`.

```javascript
const lastThree = k.rest(3)([1, 2, 3, 4, 5, 6]);

console.log(lastThree); // [4, 5, 6]
```

#### set

`set(path: (Array<number|string>|number|string), value: any, collection: (Array<any>|Object)): (Array<any>|Object)`

Set the `value` in `collection` at the given `path`.

```javascript
const object = {
  some: [
    {
      deeply: {
        nested: [
          'value'
        ]
      }
    }
  ]
};

const newObject = k.set('some[0].deeply.nested[0]')('thing')(object);

console.log(newObject); // {some: [{deeply: {nested: ['thing']}}]}
```

#### some

`some(fn: function, collection: (Array<any>|Object)): boolean`

Do any of the iterations of `collection` return truthy when applied via `fn`.

```javascript
const isPositive = (value, keyOrIndex, collection) => {
  return value > 0;
};

const arrayResult = k.some(isPositive)([-1, 0, 1]);

console.log(arrayResult); // true

const objectResult = k.some(isPositive)({
  negativeOne: -1,
  zero: 0,
  one: 1
});

console.log(objectResult); // true
```

#### take

`take(size: number, array: Array<any>): Array<any>`

Takes the first *n* number of items from `array`, where *n* is `size`.

```javascript
const firstThree = k.take(3)([1, 2, 3, 4, 5, 6]);

console.log(firstThree); // [1, 2, 3]
```

### Development

  Standard stuff, clone the repo and `npm i` to get the dependencies. npm scripts available:
  * `build` => builds the distributed JS with `NODE_ENV=development` and with sourcemaps
  * `build:minified` => builds the distributed JS with `NODE_ENV=production` and minified
  * `dev` => runs the webpack dev server for the playground
  * `dist` => runs the `build` and `build:minified`
  * `lint` => runs ESLint against files in the `src` folder
  * `lint:fix` => runs ESLint against files in the `src` folder and fixes any fixable issues discovered
  * `prepublish` => if in publish, runs `prepublish:compile`
  * `prepublish:compile` => runs the `lint`, `test`, `transpile`, `dist` scripts
  * `test` => run `ava` with NODE_ENV=test
  * `test:coverage` => run `ava` with `nyc` to calculate code coverage
  * `test:watch` => runs `test` but with persistent watcher
  * `transpile` => runs Babel against files in `src` to files in `lib`
