// test
import test from 'ava';

// src
import * as reduce from 'src/_internal/reduce';

test('if reduceArray will reduce the array', (t) => {
  const fn = (sum, number) => sum + number;
  const initialValue = 0;
  const array = [0, 1, 2, 3, 4, 5, 6];

  const result = reduce.reduceArray(fn, initialValue, array);

  t.is(result, array.reduce(fn), initialValue);
});

test('if reduceArray will reduce the array when no initialValue is passed', (t) => {
  const fn = (sum, number) => sum + number;
  const initialValue = undefined;
  const array = [0, 1, 2, 3, 4, 5, 6];

  const result = reduce.reduceArray(fn, initialValue, array);

  t.is(result, array.reduce(fn), initialValue);
});

test('if reduceRightArray will reduce the array', (t) => {
  const fn = (sum, number) => sum + number;
  const initialValue = 0;
  const array = [0, 1, 2, 3, 4, 5, 6];

  const result = reduce.reduceRightArray(fn, initialValue, array);

  t.is(result, array.reduceRight(fn), initialValue);
});

test('if reduceRightArray will reduce the array when no initialValue is passed', (t) => {
  const fn = (sum, number) => sum + number;
  const initialValue = undefined;
  const array = [0, 1, 2, 3, 4, 5, 6];

  const result = reduce.reduceRightArray(fn, initialValue, array);

  t.is(result, array.reduceRight(fn), initialValue);
});

test('if reduceObject will reduce the object', (t) => {
  const fn = (sum, number) => sum + number;
  const initialValue = 0;
  const array = [0, 1, 2, 3, 4, 5, 6];
  const object = array.reduce((object, value) => {
    object[value] = value;

    return object;
  }, {});

  const result = reduce.reduceObject(fn, initialValue, object);

  t.is(result, array.reduce(fn), initialValue);
});

test('if reduceObject will reduce the array when no initialValue is passed', (t) => {
  const fn = (sum, number) => sum + number;
  const initialValue = undefined;
  const array = [0, 1, 2, 3, 4, 5, 6];
  const object = array.reduce((object, value) => {
    object[value] = value;

    return object;
  }, {});

  const result = reduce.reduceObject(fn, initialValue, object);

  t.is(result, array.reduce(fn), initialValue);
});

test('if reduceRightObject will reduce the object', (t) => {
  const fn = (sum, number) => sum + number;
  const initialValue = 0;
  const array = [0, 1, 2, 3, 4, 5, 6];
  const object = array.reduce((object, value) => {
    object[value] = value;

    return object;
  }, {});

  const result = reduce.reduceRightObject(fn, initialValue, object);

  t.is(result, array.reduceRight(fn), initialValue);
});

test('if reduceRightObject will reduce the array when no initialValue is passed', (t) => {
  const fn = (sum, number) => sum + number;
  const initialValue = undefined;
  const array = [0, 1, 2, 3, 4, 5, 6];
  const object = array.reduce((object, value) => {
    object[value] = value;

    return object;
  }, {});

  const result = reduce.reduceRightObject(fn, initialValue, object);

  t.is(result, array.reduceRight(fn), initialValue);
});

test('if reduce will call reduceArray on an array collection', (t) => {
  const fn = (sum, number) => sum + number;
  const initialValue = 0;
  const collection = [0, 1, 2, 3, 4, 5, 6];

  const result = reduce.reduce(fn, initialValue, collection);

  t.is(result, collection.reduce(fn, initialValue));
});

test('if reduce will call reduceObject on an object collection', (t) => {
  const fn = (sum, number) => sum + number;
  const initialValue = 0;
  const array = [0, 1, 2, 3, 4, 5, 6];
  const collection = array.reduce((object, value) => {
    object[value] = value;

    return object;
  }, {});

  const result = reduce.reduce(fn, initialValue, collection);

  t.is(result, array.reduce(fn, initialValue));
});

test('if reduceRight will call reduceRightArray on an array collection', (t) => {
  const fn = (sum, number) => sum + number;
  const initialValue = 0;
  const collection = [0, 1, 2, 3, 4, 5, 6];

  const result = reduce.reduceRight(fn, initialValue, collection);

  t.is(result, collection.reduceRight(fn, initialValue));
});

test('if reduceRight will call reduceRightObject on an object collection', (t) => {
  const fn = (sum, number) => sum + number;
  const initialValue = 0;
  const array = [0, 1, 2, 3, 4, 5, 6];
  const collection = array.reduceRight((object, value) => {
    object[value] = value;

    return object;
  }, {});

  const result = reduce.reduceRight(fn, initialValue, collection);

  t.is(result, array.reduceRight(fn, initialValue));
});
