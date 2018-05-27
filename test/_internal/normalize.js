// test
import test from 'ava';
import sinon from 'sinon';

// src
import * as normalize from 'src/_internal/normalize';

test('if assignFallback will shallowly merge the objects passed', (t) => {
  const object1 = {};
  const object2 = {foo: 'bar'};
  const object3 = {bar: 'baz'};

  const result = normalize.assignFallback(object1, object2, object3);

  t.is(result, object1);
  t.deepEqual(result, {
    foo: 'bar',
    bar: 'baz'
  });
});

test('if copyArray will copy the array items shallowly', (t) => {
  const array = [{}, 'foo', 123];

  const result = normalize.copyArray(array);

  t.not(result, array);
  t.deepEqual(result, array);
});

test('if identity returns the first parameter passed', (t) => {
  const parameters = [{}, 'foo', 123];

  const result = normalize.identity(...parameters);

  t.is(result, parameters[0]);
});

test('if getNormalizedResult will call onArray with the value itself if an array', (t) => {
  const value = [{}, 'foo', 123];
  const onArray = sinon.stub().returnsArg(0);
  const onObject = sinon.stub().returnsArg(1);

  const result = normalize.getNormalizedResult(value, onArray, onObject);

  t.true(onArray.calledOnce);
  t.true(onArray.calledWith(value));

  t.true(onObject.notCalled);

  t.is(result, value);
});

test('if getNormalizedResult will call onArray with the value wrapped in an array if a primitive', (t) => {
  const value = 'foo';
  const onArray = sinon.stub().returnsArg(0);
  const onObject = sinon.stub().returnsArg(1);

  const result = normalize.getNormalizedResult(value, onArray, onObject);

  t.true(onArray.calledOnce);
  t.true(onArray.calledWith([value]));

  t.true(onObject.notCalled);

  t.not(result, value);
  t.deepEqual(result, [value]);
});

test('if getNormalizedResult will call onArray with the value cloned as an array if array-like', (t) => {
  const value = {0: 'foo', 1: 'bar', 2: 'baz', length: 3};
  const onArray = sinon.stub().returnsArg(0);
  const onObject = sinon.stub().returnsArg(1);

  const result = normalize.getNormalizedResult(value, onArray, onObject);
  const expectedResult = Object.keys(value).reduce((array, key) => {
    if (key !== 'length') {
      array.push(value[key]);
    }

    return array;
  }, []);

  t.true(onArray.calledOnce);
  t.true(onArray.calledWith(expectedResult));

  t.true(onObject.notCalled);

  t.not(result, value);
  t.deepEqual(result, expectedResult);
});

test('if getNormalizedResult will call onObject with the value cloned as an array if anything else', (t) => {
  const value = {0: 'foo', 1: 'bar', 2: 'baz'};
  const onArray = sinon.stub().returnsArg(0);
  const onObject = sinon.stub().returnsArg(0);

  const result = normalize.getNormalizedResult(value, onArray, onObject);

  t.true(onArray.notCalled);

  t.true(onObject.calledOnce);
  t.true(onObject.calledWith(value));

  t.is(result, value);
});

test('if getNormalizedCollection will call getNormalizedResult returning via identity', (t) => {
  const value = [{}, 'foo', 123];

  const result = normalize.getNormalizedCollection(value);

  t.is(result, value);
});
