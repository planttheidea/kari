// test
import test from 'ava';
import sinon from 'sinon';

// src
import reduceRight from 'src/reduceRight';
import * as array from 'src/_utils/reduceArray';
import * as object from 'src/_utils/reduceObject';

test('if reduceRight will call reduceArray if the items are an array', (t) => {
  const items = [];
  const method = () => {};
  const initialValue = 0;

  const reduceArrayStub = sinon.stub(array, 'default');
  const reduceObjectStub = sinon.stub(object, 'default');

  reduceRight(method, initialValue, items);

  t.true(reduceArrayStub.calledOnce);

  const args = reduceArrayStub.firstCall.args;

  t.is(args.length, 3);

  t.deepEqual(args, [method, [...items].reverse(), initialValue]);

  t.true(reduceObjectStub.notCalled);

  reduceArrayStub.restore();
  reduceObjectStub.restore();
});

test('if reduceRight will call reduceObject if the items are an object', (t) => {
  const items = {};
  const method = () => {};
  const initialValue = 0;

  const reduceArrayStub = sinon.stub(array, 'default');
  const reduceObjectStub = sinon.stub(object, 'default');

  reduceRight(method, initialValue, items);

  t.true(reduceArrayStub.notCalled);

  t.true(reduceObjectStub.calledOnce);

  const args = reduceObjectStub.firstCall.args;

  t.is(args.length, 4);

  t.deepEqual(args, [method, items, initialValue, Object.keys(items).reverse()]);

  reduceArrayStub.restore();
  reduceObjectStub.restore();
});

test('if reduceRight will call reduceArray if the items are neither an array nor object', (t) => {
  const items = 'foo';
  const method = () => {};
  const initialValue = 0;

  const reduceArrayStub = sinon.stub(array, 'default');
  const reduceObjectStub = sinon.stub(object, 'default');

  reduceRight(method, initialValue, items);

  t.true(reduceArrayStub.calledOnce);

  const args = reduceArrayStub.firstCall.args;

  t.is(args.length, 3);

  t.deepEqual(args, [method, [items], initialValue]);

  t.true(reduceObjectStub.notCalled);

  reduceArrayStub.restore();
  reduceObjectStub.restore();
});
