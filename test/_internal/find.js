// test
import test from 'ava';

// src
import * as find from 'src/_internal/find';

test('if createFindArray will create a method that will find the item in the array from the beginning', (t) => {
  const isIndex = false;
  const isFromLast = false;

  const array = ['foo', 'bar', 'bar', 'baz'];
  const fn = (matchValue) => (value) => value === matchValue;

  const matchResult = find.createFindArray(isIndex, isFromLast)(fn('bar'), array);

  t.is(matchResult, 'bar');

  const noMatchResult = find.createFindArray(isIndex, isFromLast)(fn('quz'), array);

  t.is(noMatchResult, undefined);
});

test('if createFindArray will create a method that will find the index of the item in the array from the beginning', (t) => {
  const isIndex = true;
  const isFromLast = false;

  const array = ['foo', 'bar', 'bar', 'baz'];
  const fn = (matchValue) => (value) => value === matchValue;

  const matchResult = find.createFindArray(isIndex, isFromLast)(fn('bar'), array);

  t.is(matchResult, 1);

  const noMatchResult = find.createFindArray(isIndex, isFromLast)(fn('quz'), array);

  t.is(noMatchResult, -1);
});

test('if createFindArray will create a method that will find the item in the array from the end', (t) => {
  const isIndex = false;
  const isFromLast = true;

  const array = ['foo', 'bar', 'bar', 'baz'];
  const fn = (matchValue) => (value) => value === matchValue;

  const matchResult = find.createFindArray(isIndex, isFromLast)(fn('bar'), array);

  t.is(matchResult, 'bar');

  const noMatchResult = find.createFindArray(isIndex, isFromLast)(fn('quz'), array);

  t.is(noMatchResult, undefined);
});

test('if createFindArray will create a method that will find the index of the item in the array from the end', (t) => {
  const isIndex = true;
  const isFromLast = true;

  const array = ['foo', 'bar', 'bar', 'baz'];
  const fn = (matchValue) => (value) => value === matchValue;

  const matchResult = find.createFindArray(isIndex, isFromLast)(fn('bar'), array);

  t.is(matchResult, 2);

  const noMatchResult = find.createFindArray(isIndex, isFromLast)(fn('quz'), array);

  t.is(noMatchResult, -1);
});

test('if createFindObject will create a method that will find the item in the object from the beginning', (t) => {
  const isKey = false;
  const isFromLast = false;

  const object = {foo: 'foo', firstBar: 'bar', secondBar: 'bar', baz: 'baz'};
  const fn = (matchValue) => (value) => value === matchValue;

  const matchResult = find.createFindObject(isKey, isFromLast)(fn('bar'), object);

  t.is(matchResult, 'bar');

  const noMatchResult = find.createFindObject(isKey, isFromLast)(fn('quz'), object);

  t.is(noMatchResult, undefined);
});

test('if createFindObject will create a method that will find the index of the item in the object from the beginning', (t) => {
  const isKey = true;
  const isFromLast = false;

  const object = {foo: 'foo', firstBar: 'bar', secondBar: 'bar', baz: 'baz'};
  const fn = (matchValue) => (value) => value === matchValue;

  const matchResult = find.createFindObject(isKey, isFromLast)(fn('bar'), object);

  t.is(matchResult, 'firstBar');

  const noMatchResult = find.createFindObject(isKey, isFromLast)(fn('quz'), object);

  t.is(noMatchResult, undefined);
});

test('if createFindObject will create a method that will find the item in the object from the end', (t) => {
  const isKey = false;
  const isFromLast = true;

  const object = {foo: 'foo', firstBar: 'bar', secondBar: 'bar', baz: 'baz'};
  const fn = (matchValue) => (value) => value === matchValue;

  const matchResult = find.createFindObject(isKey, isFromLast)(fn('bar'), object);

  t.is(matchResult, 'bar');

  const noMatchResult = find.createFindObject(isKey, isFromLast)(fn('quz'), object);

  t.is(noMatchResult, undefined);
});

test('if createFindObject will create a method that will find the index of the item in the object from the end', (t) => {
  const isKey = true;
  const isFromLast = true;

  const object = {foo: 'foo', firstBar: 'bar', secondBar: 'bar', baz: 'baz'};
  const fn = (matchValue) => (value) => value === matchValue;

  const matchResult = find.createFindObject(isKey, isFromLast)(fn('bar'), object);

  t.is(matchResult, 'secondBar');

  const noMatchResult = find.createFindObject(isKey, isFromLast)(fn('quz'), object);

  t.is(noMatchResult, undefined);
});
