// test
import test from 'ava';
import _ from 'lodash';
import sinon from 'sinon';
import {ARRAY, DATE, OBJECT, NAN, NULL, POSITIVE_INTEGER, STRING, UNDEFINED} from 'test/helpers/_typeCheckValues';

// src
import isEquivalent from 'src/_utils/isEquivalent';
import * as type from 'src/_utils/getObjectClass';

test('if isEquivalent returns true when values are strictly equal', (t) => {
  t.true(isEquivalent(STRING, STRING));
  t.true(isEquivalent(POSITIVE_INTEGER, POSITIVE_INTEGER));
  t.true(isEquivalent(OBJECT, OBJECT));
  t.true(isEquivalent(ARRAY, ARRAY));
  t.true(isEquivalent(NULL, NULL));
  t.true(isEquivalent(UNDEFINED, UNDEFINED));
});

test('if isEquivalent returns false when values are of different object classes', (t) => {
  t.false(isEquivalent(STRING, POSITIVE_INTEGER));
  t.false(isEquivalent(ARRAY, OBJECT));
});

test('if isEquivalent returns true when values are both NaN', (t) => {
  t.true(isEquivalent(NAN, NAN));
});

test('if isEquivalent returns true if the valueOf is equal for dates, booleans, numbers, and strings', (t) => {
  t.true(isEquivalent(DATE, new Date(DATE.valueOf())));
  t.false(isEquivalent(DATE, new Date(123)));

  t.true(isEquivalent(new Boolean('true'), new Boolean('true')));
  t.false(isEquivalent(new Boolean('true'), new Boolean('')));

  t.true(isEquivalent(new Number('123'), new Number('123')));
  t.false(isEquivalent(new Number('123'), new Number('321')));

  t.true(isEquivalent(new String('foo'), new String('foo')));
  t.false(isEquivalent(new String('foo'), new String('bar')));
});

test('if isEquivalent returns true if the error has the same message and name', (t) => {
  t.true(isEquivalent(new Error('foo'), new Error('foo')));
  t.false(isEquivalent(new Error('foo'), new Error('bar')));
});

test('if isEquivalent returns true if the regexp when converted to string are equal', (t) => {
  t.true(isEquivalent(/foo/, /foo/));
  t.false(isEquivalent(/foo/g, /foo/));
});

test('if isEquivalent return true if the entries of maps and sets are equal in value', (t) => {
  const map1 = new Map();
  const map2 = new Map();

  map1.set('foo', 'bar');
  map2.set('foo', 'bar');

  map1.set('bar', {bar: 'baz'});
  map2.set('bar', {bar: 'baz'});

  t.true(isEquivalent(map1, map2));
  t.false(isEquivalent(map1, new Map()));

  const set1 = new Set();
  const set2 = new Set();

  set1.add('foo');
  set2.add('foo');

  set1.add('bar');
  set2.add('bar');

  t.true(isEquivalent(set1, set2));
  t.false(isEquivalent(set1, new Set()));
});

test('if isEquivalent returns true if the object is equal in value', (t) => {
  const object = {
    foo: 'bar',
    bar: 'baz',
    baz: {
      foo: 'bar'
    }
  };
  const clone = _.cloneDeep(object);

  t.true(isEquivalent(object, clone));
  t.false(
    isEquivalent(object, {
      ...object,
      baz: 'foo'
    })
  );
});

test('if isEquivalent returns true if the array is equal in value', (t) => {
  const array = [
    'foo',
    'bar',
    {
      baz: {
        foo: 'bar'
      }
    }
  ];
  const clone = _.cloneDeep(array);

  t.true(isEquivalent(array, clone));
});

test('if isEquivalent handles circular objects', (t) => {
  const object = {
    foo: 'bar',
    bar: 'baz'
  };

  object.baz = object;

  const clone = {...object};

  clone.baz = clone;

  t.true(isEquivalent(object, clone));
});

test('if isEquivalent returns false as an ultimate fallback when no object class match is found for comparison', (t) => {
  const getObjectClassStub = sinon.stub(type, 'default').returns('foo');

  t.false(isEquivalent({}, {}));

  getObjectClassStub.restore();
});
