# kari

A tiny, modular, functional library to make all your collections curriable.

### Table of contents
* [Installation](#installation)
* [Usage](#usage)
  * [All modules](#all-modules)
  * [Specific module](#sopecific-module)
* [Difference with other functional libraries](#difference-with-other-functional-libraries)
* [API](#api)
  * [add](#add)
  * [always](#always)
  * [append](#append)
  * [apply](#apply)
  * [arity](#arity)
  * [ascend](#ascend)
  * [bind](#bind)
  * [compose](#compose)
  * [curry](#curry)
  * [descend](#descend)
  * [divide](#divide)
  * [endsWith](#endswith)
  * [equals](#equals)
  * [every](#every)
  * [filter](#filter)
  * [find](#find)
  * [findIndex](#findindex)
  * [forEach](#foreach)
  * [get](#get)
  * [gt](#gt)
  * [gte](#gte)
  * [identity](#identity)
  * [includes](#includes)
  * [insert](#insert)
  * [instanceOf](#instanceof)
  * [is](#is)
  * [lt](#lt)
  * [lte](#lte)
  * [map](#map)
  * [modulo](#modulo)
  * [multiply](#multiply)
  * [omit](#omit)
  * [partial](#partial)
  * [partialRight](#partialRight)
  * [partition](#partition)
  * [pick](#pick)
  * [pipe](#pipe)
  * [pluck](#pluck)
  * [prepend](#prepend)
  * [reduce](#reduce)
  * [reduceRight](#reduceright)
  * [remainder](#remainder)
  * [rest](#rest)
  * [set](#set)
  * [some](#some)
  * [sort](#sort)
  * [sortBy](#sortby)
  * [sortWith](#sortwith)
  * [startsWith](#startswith)
  * [subtract](#subtract)
  * [tap](#tap)
  * [take](#take)
  * [tryCatch](#trycatch)
  * [uncurry](#uncurry)
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

#### add

`add(first: number, second: number): number`

Adds two values together.

```javascript
const sum = k.add(2)(4);

console.log(sum); // 6
```

#### always

`always(value: any): function`

Creates a method that will always return the value passed to it.

```javascript
const alwaysFalse = k.always(false);

console.log(alwaysFalse()); // false
```

#### append

`append(newItems: (any|Array<any>), array: Array<any>): Array<any>`

Adds the new item(s) to the end of `array`.

```javascript
const appended = k.append('baz')(['foo', 'bar']);

console.log(appended); // ['foo', 'bar', 'baz']
```

#### apply

`apply(fn: function, args: Array<any>): any`

Applies `fn` with the provided `args` passed. Allows for easy conversion of a variadic function to a fixed-arity function. Note that this differs from `Function.prototype.apply` in that context is not passed, so if context is important it should be bound prior.

```javascript
const method = (...args) => {
  return args.reduce((sum, value) => {
    return sum + value;
  }, 0);
};

const result = k.apply(method)([1, 2, 3]);

console.log(result); // 6
```

#### arity

`arity(size: number, fn: function): function`

Creates a method with a fixed arity of `size`.

```javascript
const method = (a, b, c) => {
  return [a, b, c];
};

console.log(method(1, 2, 3)); // [1, 2, 3]

const onlyTwo = k.arity(2)(method);

console.log(onlyTwo(1, 2, 3)); // [1, 2, undefined]
```

#### ascend

`ascend(fn: function, first: any, second: any): number`

Get the value needed for ascending sort order. This is most commonly used in partial form in combination with a sort method.

```javascript
const sortByNameAscending = k.ascend(k.get('name'));

const sortedNames = sortByNameAscending([
  {name: 'Tony'},
  {name: 'Bill'},
  {name: 'Dave'}
]);

console.log(sortedNames); // ['Bill', 'Dave', 'Tony']
```

#### bind

`bind(fn: function, object: any, ...args: Array<any>): function`

Binds the `object` passed to `fn` for context purposes. If additional `args` are passed, they are bound as parameters to the function as well. Please note that additional args cannot be separately curried, they must be passed when the `object` is passed.

```javascript
const object = {foo: 'bar'};

function foo(...args) {
  return {
    args,
    context: this
  };
}

const bound = k.bind(foo)(object);

console.log(bound()); // {args: [], context: {foo: 'bar'}}

const boundWithArgs = k.bind(foo)(object, 'baz');

console.log(boundWithArgs()); // {args: ['baz'], context: {foo: 'bar'}}
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

console.log(curriedDivide(k.__, 4)(2))); // 0.5 (2 / 4)
```

#### descend

`descend(fn: function, first: any, second: any): number`

Get the value needed for descending sort order. This is most commonly used in partial form in combination with a sort method.

```javascript
const sortByNameAscending = k.descend(k.get('name'));

const sortedNames = sortByNameDescending([
  {name: 'Dave'},
  {name: 'Bill'},
  {name: 'Tony'}
]);

console.log(sortedNames); // ['Tony', 'Dave', 'Bill']
```

#### divide

`divide(numerator: number, denominator: number): number`

Divides the numerator and the denominator.

```javascript
const division = k.divide(26)(2);

console.log(division); // 13
```

#### endsWith

`endsWith(endingValue: any, objectToTest: (Array<any>|string)): boolean`

Determines if `objectToTest` ends with `endingValue`, either as the last character(s) in the string or as the last item in the array using strict equality.

```javascript
const endsWithAb = k.endsWith('ab');

console.log(endsWithAb('moab')); // true

const object = {};
const endsWithObject = k.endsWith(object);

console.log(endsWithObject(['foo', 'bar', object])); // true
```

#### equals

`equals(firstValue: any, secondValue: any): boolean`

Performs a value-equality comparison between `firstValue` and `secondValue`. If you wish to perform strict equality comparsion, see [is](#is).

```javascript
const object1 = {foo: 'bar'};
const object2 = {foo: 'bar'};

console.log(object1 === object2); // false
console.log(k.equals(object1, object2)); // true
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

Iterate over `collection` calling `fn`. Returns `collection` for composability.

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

#### gt

`gt(greaterValue: (number|string), lesserValue: (number|string)): boolean`

Determines if `greaterValue` is greater than `lesserValue` based on the `>` operator.

```javascript
console.log(k.gt(10, 5)); // true
console.log(k.gt(10, 15)); // false
console.log(k.gt(10, 10)); // false

console.log(k.gt('foo', 'bar')); // true
console.log(k.gt('bar', 'foo')); // false
console.log(k.gt('foo', 'foo')); // false
```

#### gte

`gte(greaterOrEqualValue: (number|string), lesserOrEqualValue: (number|string)): boolean`

Determines if `greaterOrEqualValue` is greater than or equal to `lesserOrEqualValue` based on the `>=` operator.

```javascript
console.log(k.gte(10, 5)); // true
console.log(k.gte(10, 15)); // false
console.log(k.gte(10, 10)); // true

console.log(k.gte('foo', 'bar')); // true
console.log(k.gte('bar', 'foo')); // false
console.log(k.gte('foo', 'foo')); // true
```

#### identity

`identity(value: any): any`

Method that returns the first parameter passed to it. This is useful when composing functions in error situations, such as with [tryCatch](#trycatch).

```javascript
const value = {foo: 'bar'};

const result = k.tryCatch(JSON.parse, k.identity)(value);

console.log(result); // Error
```

#### includes

`includes(value: any, object: (Array<any>|Object|string)): boolean`

Determines if `value` is contained within `object` based on strict equality.

```javascript
const value = 'bar';

const array = ['foo', 'bar', 'baz'];

console.log(k.includes(value)(array)); // true

const object = {
  foo: 'foo',
  bar: 'bar',
  baz: 'baz'
};

console.log(k.includes(value)(object)); // true

const string = 'foo-bar-baz';

console.log(k.includes(value)(string)); // true
```

#### insert

`insert(index: number, newItems: (Array<any>|any), array: (Array<any>Object)): Array<any>`

Insert `newItems` into `array` at the provided `index`.

```javascript
const newArray = k.insert(2)('x')([1, 2, 3]);

console.log(newArray); // [1, 2, 'x', 3]

const newObject = k.insert('bar')('baz')({foo: 'bar'});

console.log(newObject); // {foo: 'bar', bar: 'baz'}
```

#### instanceOf

`instanceOf(Constructor: function, value: any): boolean`

Tests if `value` is an instance of `Constructor` using `instanceof`.

```javascript
class Foo {}

const object = new Foo();

console.log(k.instanceOf(Foo)(object)); // true
console.log(k.instanceOf(Object)(object)); // true
console.log(k.instanceOf(String)(object)); // false
```

#### is

`is(value: any, valueOrConstructor: any): boolean`

Compares `value` to `valueOrConstructor` to determine if they are either strictly equal or if `value` is an instance of `valueOrConstructor`. If you wish to do a value equality comparison instead of strict equality, see [equals](#equals). Please note that this does not check up the inheritance chain, so if you wish to check ancestry see [instanceOf](#instanceof).

```javascript
console.log(k.is(String)('foo')); // true
console.log(k.is(String)(new String('foo'))); // true
console.log(k.is(Number)(123)); // true
console.log(k.is(Object)({})); // true
```

#### lt

`lt(lesserValue: (number|string), greaterValue: (number|string)): boolean`

Determines if `lesserValue` is less than `greaterValue` based on the `>` operator.

```javascript
console.log(k.lt(10, 15)); // true
console.log(k.lt(10, 5)); // false
console.log(k.lt(10, 10)); // false

console.log(k.lt('bar', 'foo')); // true
console.log(k.lt('foo', 'bar')); // false
console.log(k.lt('foo', 'foo')); // false
```

#### lte

`lte(lesserOrEqualValue: (number|string), greaterOrEqualValue: (number|string)): boolean`

Determines if `lesserOrEqualValue` is less than or equal to `greaterOrEqualValue` based on the `>=` operator.

```javascript
console.log(k.lte(10, 15)); // true
console.log(k.lte(10, 5)); // false
console.log(k.lte(10, 10)); // true

console.log(k.lte('bar', 'foo')); // true
console.log(k.lte('foo', 'bar')); // false
console.log(k.lte('foo', 'foo')); // true
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

#### modulo

`modulo(numerator: number, modulus: number): number`

Gets the mathematical mod of the numerator and the modulus. Note that this operates differently than the javascript `%` operator in the following ways:
* Integer arguments are required (decimals will return `NaN`)
* The `modulus` must be positive (`0` or negative numbers will return `NaN`)

If you are looking for the traditional behavior of the `%` operator, see [remainder](#remainder).

```javascript
console.log(k.modulo(-17, 5)); // 3
console.log(k.modulo(17, 5)); // 2
console.log(k.modulo(17, -5)); // NaN
console.log(k.modulo(17, 0)); // NaN
console.log(k.modulo(17.2, 5)); // NaN
console.log(k.modulo(17, 5.3)); // NaN
```

#### multiply

`multiply(first: number, second: number): number`

Multiplies two values together.

```javascript
const product = k.multiply(2)(4);

console.log(product); // 8
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
  return [a, b, c];
};

const partialFn = k.partial(add, 1, 2);

console.log(partialFn(3)); // [1, 2, 3]
```

#### partialRight

`partialRight(fn: function, ...partialArgs: Array<any>): function(...restOfArgs): any`

Create a partial function that will call `fn` with both `partialArgs` and `restOfArgs`, but in the order of `restOfArgs` first.

```javascript
const add = (a, b, c) => {
  return [a, b, c];
};

const partialFn = k.partialRight(add, 1, 2);

console.log(partialFn(3)); // [3, 1, 2]
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

#### remainder

`remainder(numerator: number, denominator: number): number`

Gets the remainder of dividing the `numerator` and the `denominator`. This is the traditional behavior of the `%` operator.

```javascript
console.log(k.remainder(17)(3)) // 2
console.log(k.remainder(-17)(3)) // -2
console.log(k.remainder(17)(-3)) // 2
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

#### sort

`sort(fn: function, array: Array<any>): Array<any>`

Return a new array with the values sorted by the comparator.

```javascript
const comparator = (a, b) => {
  return a > b;
};

const sorted = k.sort(comparator)([4, 1, 3, 5, 0, 2]);

console.log(sorted); // [0, 1, 2, 3, 4, 5]
```

#### sortBy

`sortBy(fn: function, array: Array<any>): Array<any>`

Return a new array with the values sorted by the values returned from the getter function passed.

```javascript
const items = [
  {value: 'foo'},
  {value: 'bar'},
  {value: 'baz'}
]

const sorted = k.sortBy(k.get('value'))(items);

console.log(sorted); // [{value: 'bar', value: 'baz', value: 'foo'}]
```

#### sortWith

`sortWith(fns: Array<function>, array: Array<any>): Array<any>`

Return a new array with the values sorted by each of the comparators passed in order.

```javascript
const workers = [
  {name: 'Bill', salary: 40000},
  {name: 'Alex', salary: 40000},
  {name: 'Suzy', salary: 50000}
];

// sort by salary descending first, then sort by name ascending second
const payroll = k.sortWith([
  k.descend(k.get('salary')),
  k.ascend(k.get('name'))
])(workers);

console.log(payroll);
/*
[
  {name: 'Suzy', salary: 50000},
  {name: 'Alex', salary: 40000},
  {name: 'Bill', salary: 40000}
]
*/
```

#### startsWith

`startsWith(startingValue: any, objectToTest: (Array<any>|string)): boolean`

Determines if `objectToTest` ends with `startingValue`, either as the first character(s) in the string or as the first item in the array using strict equality.

```javascript
const startsWithAb = k.startsWith('ab');

console.log(startsWithAb('abstract')); // true

const object = {};
const startsWithObject = k.startsWith(object);

console.log(startsWithObject([object, 'foo', 'bar'])); // true
```

#### subtract

`subtract(first: number, second: number): number`

Subtracts the second value from the first.

```javascript
const difference = k.subtract(10)(4);

console.log(difference); // 6
```

#### tap

`tap(fn: function): function(...Array<any>): any`

Creates a method that will execute `fn` with the arguments passed and then return the first argument as [identity](#identity) does.

```javascript
const log = k.tap(k.bind(console.log, console));
const square = (value) => {
  return value ** 2;
};
const logThenSquare = k.compose(square, log);

const result = k.map(logThenSquare)([1, 2, 3]);
// 1 0 [1, 2, 3]
// 2 1 [1, 2, 3]
// 3 2 [1, 2, 3]

console.log(result); // [1, 4, 9]
```

#### take

`take(size: number, array: Array<any>): Array<any>`

Takes the first *n* number of items from `array`, where *n* is `size`.

```javascript
const firstThree = k.take(3)([1, 2, 3, 4, 5, 6]);

console.log(firstThree); // [1, 2, 3]
```

#### tryCatch

`tryCatch(tryFn: function, catchFn: function)`

Attempts to execute `tryFn` with the arguments passed, and if it fails then executes `catchFn` with the error and the arguments passed.

```javascript
const catchFn = (error, ...args) => {
  return {
    args,
    error
  };
};

const attemptParse = k.tryCatch(JSON.parse, catchFn);

console.log(attemptParse('{"foo":"bar"}')); // {foo: 'bar'}
console.log(attemptParse({foo: 'bar'})); // {args: {foo: 'bar'}, error: SyntaxError: Unexpected token o in JSON at position 1 at parse (<anonymous>)}
```

#### uncurry

`uncurry(arity: number, fn: function): function`

Takes a curried function and creates a method that accepts the parameter length of `arity` as a standard function.

```javascript
const curried = (a) => (b) => (c) => (d) => [a, b, c, d];

const uncurried = k.uncurry(4)(curried);

console.log(uncurried(1)(2)(3)(4)); // throws error that result of first call is not a function
console.log(uncurried(1, 2, 3, 4)); // [1, 2, 3, 4]
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
